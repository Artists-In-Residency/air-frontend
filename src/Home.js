import React, { Component } from 'react'
import Search from './Search.js';
import Map from './GMap.js';
import ResidencyCard from './ResidencyCard';
// import { getAllResidencies } from './api';
import { getPagedResidencies } from './api';
// import { getPagedResidencies } from './Paging.js';
// import Paging from './Paging.js'


export default class Home extends Component {
    state = {
        data: [],
        totalPage: 20,
        pageNumber: 1,
    }
    
    async componentDidMount() {
        // const result = await getAllResidencies();
        const result = await getPagedResidencies(1);
        this.setState({ data: result });
        // this.setState({ shortData: result.slice(0, 3) });
    }

    async pageThing(number) {
        // const result = await getAllResidencies();
        await this.setState({ pageNumber: this.state.pageNumber + number });
        const result = await getPagedResidencies(this.state.pageNumber);
        this.setState({ data: result });
        // this.setState({ shortData: result.slice(0, 3) });
    }

    render() {
        return (
            <div>
                <Search />
                <Map />
                <ul className='residency-list'>
                    {this.state.data.map(item => <ResidencyCard item={item} key={item.id} />)}
                </ul>
                <div className="paging">
                <button id="paging-button1" onClick={() => this.pageThing(-1)} disabled={this.state.pageNumber === 1} > LAST </button>
                <button id="paging-button2" onClick={() => this.pageThing(1)} disabled={this.state.page === 12}> NEXT </button>
                </div>
            </div>
        )
    }
}
