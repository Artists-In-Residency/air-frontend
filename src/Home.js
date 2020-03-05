import React, { Component } from 'react'
import Search from './Search.js';
import Map from './GMap.js';
import ResidencyCard from './ResidencyCard';
//import SelectState from './SelectState';
import { getPagedResidencies, getUserFromLocalStorage } from './api';



export default class Home extends Component {
    state = {
        data: [],
        totalPage: 20,
        pageNumber: 1,
        user: {}
    }
    
    async componentDidMount() {
        const result = await getPagedResidencies(1);
        this.setState({ data: result });
    }

    async pageThing(number) {
        await this.setState({ pageNumber: this.state.pageNumber + number });
        const result = await getPagedResidencies(this.state.pageNumber);
        this.setState({ data: result });
        const userFromLocalStorage = getUserFromLocalStorage();
        if (userFromLocalStorage) {
            this.setState({ user: userFromLocalStorage });
        }          
    }



    render() {
        console.log('Home props:', this.props);
        return (
            <div>
                <div className="search">
                    <Search user={this.props.user} />
                </div>
                <Map />
                <ul className='residency-list'>
                    {this.state.data.map(item => <ResidencyCard user={this.props.user} item={item} key={item.id} />)}
                </ul>
                <div className="paging">
                <button id="paging-button1" onClick={() => this.pageThing(-1)} disabled={this.state.pageNumber === 1} > LAST </button>
                <button id="paging-button2" onClick={() => this.pageThing(1)} disabled={this.state.page === 12}> NEXT </button>
                </div>
            </div>
        )
    }
}
