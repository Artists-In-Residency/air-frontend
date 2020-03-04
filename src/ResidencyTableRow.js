import React, { Component } from 'react';

export default class ResidencyTableRow extends Component {
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
            </tr>
        )
    }
}