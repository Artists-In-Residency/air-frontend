import React, { Component } from 'react'
import ResidencyTableRow from './ResidencyTableRow';
import { getAllResidencies } from './api';
import './residency-card.css';

export default class Home extends Component {
    state = {
        data: [],
    }

    async componentDidMount() {
        const result = await getAllResidencies();
        this.setState({ data: result });
    }

    render() {
        return (
            <div>
                <p>Number of records: {this.state.data.length}</p>
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
                            <th className='table-small-col'>Delete</th>
                        </tr>                        
                    </thead>
                    <tbody>
                        {this.state.data.map(item => <ResidencyTableRow item={item} key={item.id} />)}
                    </tbody>                        
                </table>
            </div>
        )
    }
}
