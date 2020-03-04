import React, { Component } from 'react'
import UserTableRow from './UserTableRow';
import { getAllUsers } from './api';

import './residency-card.css';


export default class Home extends Component {
    state = {
        data: [],
        shortData: [],
    }

    async componentDidMount() {
        const result = await getAllUsers();
        this.setState({ data: result });
    }

    render() {
        return (
            <div>
                <table className='residency-table'>
                    <thead>
                        <tr>
                            <th className='table-small-col'>ID</th>
                            <th>Email</th>
                            <th>Display Name</th>
                            <th>Edit</th>
                        </tr>                        
                    </thead>
                    <tbody>
                        {this.state.data.map(item => <UserTableRow item={item} key={item.id} />)}
                    </tbody>                        
                </table>
            </div>
        )
    }
}
