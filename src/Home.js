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
        resCenter:{
            lat:'' ,
            lng:'',
            zoom:4.5
        },
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
            // resCenter:{
            //     lat: data.body[0].lat,
            //     lng: data.body[0].long
            // },
            loading: false
        });
        console.log(this.state.resListings)
    }

    handleState = async (stateValue) => {
        console.log('e', stateValue)
        const data = await request.get(`${process.env.REACT_APP_DB_URL}/listings/state/${stateValue}`)
        this.setState({
            resState: data.body,
            resListings: data.body,
            // resCenter:{
            //     lat: data.body[0].lat,
            //     lng: data.body[0].long
            // },
            loading: false
        });
    }

    render() {
        // console.log('Home props:', this.props);
        return (
            <div>
                <Search 
                    handleSearch={this.handleSearch}
                    handleState={this.handleState}
                />
                {/* <Search user={this.props.user} /> */}
                <GMap 
                    resListings={this.state.resListings} 
                    resCenter={this.state.resCenter}
                />
                <ul className='residency-list'>
                    {this.state.resListings.map(item => <ResidencyCard user={this.props.user} item={item} key={item.id} />)}
                </ul>
                <div className="paging">
                <button className="button" id="paging-button1" onClick={() => this.pageThing(-1)} disabled={this.state.pageNumber === 1} > LAST </button>
                <button className="button" id="paging-button2" onClick={() => this.pageThing(1)} disabled={this.state.page === 12}> NEXT </button>
                </div>
            </div>
        )
    }
}
