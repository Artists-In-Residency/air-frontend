import React, { Component } from 'react'
import Search from './Search.js';
import Map from './GMap.js';
import ResidencyCard from './ResidencyCard';
import { getAllResidencies } from './api';


export default class Home extends Component {
    state = {
        data: [],
        shortData: [],
    }

    async componentDidMount() {
        const result = await getAllResidencies();
        this.setState({ data: result });
        this.setState({ shortData: result.slice(0, 3) });
    }

    render() {
        return (
            <div>
                <Search />
                <Map />
                <ul className='residency-list'>
                    {this.state.shortData.map(item => <ResidencyCard item={item} key={item.id} />)}
                </ul>
            </div>
        )
    }
}
