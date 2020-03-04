import React, { Component } from 'react';
import './residency-card.css';

export default class ResidencyCard extends Component {
    render() {
        return (
            <li className='residency-card'>
                <div className='image-container'>
                    <img src={this.props.item.img_url} alt='pic' />
                </div>
                <h3>{this.props.item.program_name}</h3>
                <p>{this.props.item.description}</p>
                <p>Mediums: {this.props.item.art_medium}</p> 
                <div className='address-container'>
                    <h4>Address</h4>
                    {this.props.item.address}<br />
                    {this.props.item.city}, {this.props.item.state} {this.props.item.zip_code}
                </div>
                <div className='contact-container'>
                    <h4>Contact Info</h4>
                    {this.props.item.phone}
                    {this.props.item.email}
                </div>
                <div className="grant-container">
                    <p>{this.props.item.is_grant}</p>
                </div>
                <p><a href={this.props.item.link_url}>Check it out</a></p>
                <button onClick={() => this.props.handleFavorite(this.props.item)}>MAKE FAVORITE</button> 
            </li>
        )
    }
}