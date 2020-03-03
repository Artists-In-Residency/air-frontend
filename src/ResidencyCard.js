import React, { Component } from 'react'

export default class ResidencyCard extends Component {
    render() {
        return (
            <li>
                Individual Residency Listing
                <p><strong>{this.props.item.program_name}</strong><li>{this.props.item.address}</li> 
                <li>{this.props.item.city}</li>
                <li>{this.props.item.state}</li> 
                <li>{this.props.item.zip_code}</li>
                <li>{this.props.item.phone}</li> 
                <li>{this.props.item.email}</li>
                <li>{this.props.item.art_medium}</li> 
                <li><img src={this.props.item.img_url} alt='pic'/></li> 
                <li><a href={this.props.item.link_url}>Check it out</a></li>
                <li>{this.props.item.is_grant}</li>
                <li>{this.props.item.description}</li>
                <button onClick={() => this.props.handleFavorite(this.props.item)}>MAKE FAVORITE</button></p> 
            </li>
        )
    }
}