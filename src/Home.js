import React, { Component } from 'react'
import Search from './Search.js';
import GMap from './GMap.js';
import ResidencyCard from './ResidencyCard';
import SelectState from './SelectState';
import request from 'superagent';
import { getPagedResidencies, getUserFromLocalStorage, getAllResidencies } from './api';

export default class Home extends Component {
    state = {
        data: [],
        totalPage: 20,
        pageNumber: 1,
        resListings: [],
        user: {},
        resState: [],
        resCenter:[],
        loading: false
    }
    
    async componentDidMount() {
        console.log('>>>>>>>>>MOUNTING<<<<<<<<<')
        const result = await getPagedResidencies(1);
        const allListings = await getAllResidencies();
        this.setState({resListings: allListings})
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

    handleSearch = (input) => async (e) => {
        e.preventDefault();
        this.setState({ loading: true });
        const data = await request.get(`${process.env.REACT_APP_DB_URL}/search?search=${input}`)
        console.log(data);
        this.setState({
            resState: data.body,
            resListings: data.body,
            loading: false
        });
        console.log(this.state.resListings)
    }

    render() {
        // console.log('Home props:', this.props);
        return (
            <div>
                <Search handleSearch={this.handleSearch}/>
                <SelectState />
                {/* <Search user={this.props.user} /> */}
                <GMap resListings={this.state.resListings} />
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
