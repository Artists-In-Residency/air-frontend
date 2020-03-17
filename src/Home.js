import React, { Component } from 'react'
import Search from './Search.js';
import GMap from './GMap.js';
import ResidencyCard from './ResidencyCard';
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
        loading: false
    }
    
    async componentDidMount() {
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
        // seems like this should be in api.js
        const data = await request.get(`${process.env.REACT_APP_DB_URL}/search?search=${input}`)
        this.setState({
            resState: data.body,
            resListings: data.body,
            loading: false
        });
    }

    handleState = async (stateValue) => {
        // seems like this should be in api.js
        const data = await request.get(`${process.env.REACT_APP_DB_URL}/listings/state/${stateValue}`)
        this.setState({
            resState: data.body,
            resListings: data.body,
            loading: false
        });
    }

    render() {
        return (
            <div>
                <Search 
                    handleSearch={this.handleSearch}
                    handleState={this.handleState}
                />
                <GMap 
                    resListings={this.state.resListings} 
                    resCenter={this.state.resCenter}
                />
                <ul className='residency-list'>
                    {this.state.resListings.map(item => <ResidencyCard user={this.props.user} item={item} key={item.id} />)}
                </ul>
            </div>
        )
    }
}
