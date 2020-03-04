import React, { Component } from 'react';
import request from 'superagent'

export default class ResidencyTableRow extends Component {

    // Move to API?
    handleDeleteResidency = (residency) => {
        const URL=`${process.env.REACT_APP_DB_URL}/users/listings/${residency}`;        
        console.log('Deleting via URL: ', URL);
        console.log('COMMENTED OUT - Deleting: ', residency);
        // const result = await request.delete(URL, residency);
        // console.log('Delete results:', result.body);
        // window.location = ('/');
    }

    render() {
        return (
            <tr className='residency-row'>
                {/* <td className='image-container'>
                    <img src={this.props.item.img_url} alt='pic' />
                </td> */}
                <td>{this.props.item.id}</td>
                <td><a href={this.props.item.link_url}>{this.props.item.program_name}</a></td>
                <td className='description'>{this.props.item.description}</td>
                <td>{this.props.item.art_medium}</td> 
                <td>{this.props.item.address}<br />{this.props.item.city}, {this.props.item.state} {this.props.item.zip_code}</td>
                <td>{this.props.item.phone}</td>
                <td>{this.props.item.email}</td>
                <td>{this.props.item.is_grant}</td>
                <td><a href={`/edit/${this.props.item.id}`}>Edit</a></td>
                <td><a href='#' onClick={() => this.handleDeleteResidency(this.props.item.id)}>Delete</a></td>
            </tr>
        )
    }
}