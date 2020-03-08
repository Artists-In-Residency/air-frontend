import React, { Component } from 'react';
export default class ResidencyTableRow extends Component {

    // Move to API?
    handleDeleteResidency = (residency) => {
        const URL=`${process.env.REACT_APP_DB_URL}/users/listings/${residency}`;        
        console.log('Deleting via URL: ', URL);
        console.log('COMMENTED OUT - Deleting: ', residency);
        // const result = await request.delete(URL, residency);
    }

    render() {
        return (
            <tr className='residency-row'>
                <td>{this.props.item.id}</td>
                <td><a href={`/listings/${this.props.item.id}`}>{this.props.item.program_name}</a></td>
                <td className='description'>{this.props.item.description}</td>
                <td>{this.props.item.art_medium}</td> 
                <td>{this.props.item.address}<br />{this.props.item.city}, {this.props.item.state} {this.props.item.zip_code}</td>
                <td>{this.props.item.phone_num}</td>
                <td>{this.props.item.email}</td>
                <td>{this.props.item.is_grant}</td>
                <td><button onClick={`window.location.href = '/edit/${this.props.item.id}'`}>Edit</button></td>
                <td><button onClick={() => this.handleDeleteResidency(this.props.item.id)}>Delete</button></td>
            </tr>
        )
    }
}