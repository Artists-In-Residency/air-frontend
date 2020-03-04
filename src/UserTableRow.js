import React, { Component } from 'react';

export default class UserTableRow extends Component {
    render() {
        return (
            <tr className='user-row'>
                <td>{this.props.item.id}</td>
                <td>{this.props.item.email}</td>
                <td>{this.props.item.display_name}</td>
                <td>x</td>
                {/* <td><a href={`/edit/user/${this.props.item.id}`}>Edit</a></td> */}
            </tr>
        )
    }
}