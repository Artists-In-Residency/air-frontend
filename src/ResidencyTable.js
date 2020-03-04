import React, { Component } from 'react'
import ResidencyTableRow from './ResidencyTableRow';
import { getAllResidencies } from './api';

import './residency-card.css';


export default class Home extends Component {
    state = {
        data: [],
        shortData: [],
    }

    async componentDidMount() {
        const result = await getAllResidencies();
        this.setState({ data: result });
        this.setState({ shortData: result.slice(0, 19) });
    }

    render() {
        return (
            <div>
                <table className='residency-table'>
                    <thead>
                        <tr>
                            <th className='table-small-col'>ID</th>
                            <th>Program Name</th>
                            <th>Description</th>
                            <th>Art Medium</th> 
                            <th>Address</th>
                            <th>Phone</th>
                            <th>Email</th>
                            <th className='table-small-col'>Is a grant</th>
                            <th className='table-small-col'>Edit</th>
                        </tr>                        
                    </thead>
                    <tbody>
                        {this.state.shortData.map(item => <ResidencyTableRow item={item} key={item.id} />)}
                    </tbody>                        
                </table>
            </div>
        )
    }
}
