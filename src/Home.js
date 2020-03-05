import React, { Component } from 'react'
import Search from './Search.js';
import Map from './GMap.js';
import ResidencyCard from './ResidencyCard';
import { getAllResidencies, getUserLogin } from './api';


export default class Home extends Component {
    state = {
        data: [],
        shortData: [],
        user: {}
    }

    async componentDidMount() {
        const result = await getAllResidencies();
        this.setState({ data: result });
        this.setState({ shortData: result.slice(0, 3) });
        const userFromLocalStorage = getUserLogin();
        if (userFromLocalStorage) {
            this.setState({ user: userFromLocalStorage });
        }          
    }

    render() {
        console.log('Home props:', this.props);
        return (
            <div>
                <Search user={this.props.user} />
                <Map />
                <ul className='residency-list'>
                    {this.state.shortData.map(item => <ResidencyCard user={this.props.user} item={item} key={item.id} />)}
                </ul>
            </div>
        )
    }
}
