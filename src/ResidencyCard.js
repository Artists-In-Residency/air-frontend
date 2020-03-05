import React, { Component } from 'react';
import './residency-card.css';
import request from 'superagent';
import { handleFavorite } from './api.js'
import { getUserLogin } from './api';


export default class ResidencyCard extends Component {

    //stuff to do error handling when an image is 404
    constructor(props) {
        super(props);
        this.state = { imageStatus: "", error: false };
      }
    
      handleImageLoaded() {
        this.setState({ imageStatus: "", error: false });
      }
    
      handleImageError() {
        this.setState({ imageStatus: "", error: true });
      }


    handleDelete = async () => {
        const URL = `${process.env.REACT_APP_DB_URL}/api/me/favorites/${this.props.item.id}`;
        await request.delete(URL)
            .set('Authorization', this.props.user.token)
            .then((results) => {
                console.log('Delete results', results);
                // this.setState({ data: results.body });
            })
            .catch((err) => { 
                alert(err); 
                console.log(err);
            })       
    }

      

    render() {
        return (
            <li className='residency-card'>
                <div className='image-container'>
                    <a href={`/listings/${this.props.item.id}`}>
                        <img src={this.state.error || this.props.item.img_url ? this.props.item.img_url : 'http://placekitten.com/100/100'} onLoad={this.handleImageLoaded.bind(this)} onError={this.handleImageError.bind(this)} alt='pic'/>
                                {this.state.imageStatus}
                    </a>
                </div>
                <h3><a href={`/listings/${this.props.item.id}`}>{this.props.item.program_name}</a></h3>
                <p>{this.props.item.description}</p>
                <div className='card-section'>
                    <h4>Supported Mediums</h4> 
                    {this.props.item.art_medium}
                </div> 
                {this.props.item.city && 
                    <div className='card-section'>
                        <h4>Address</h4>
                        {this.props.item.address && <p>{this.props.item.address}</p> }
                        {this.props.item.city}, {this.props.item.state} {this.props.item.zip_code}
                    </div>
                }
                <div className='card-section'>
                    <h4>Contact Info</h4>
                    <p><a href={this.props.item.link_url}>Website</a></p>
                    {this.props.item.phone && <p>{this.props.item.phone}</p> }
                    {this.props.item.email && <p>{this.props.item.email}</p> }
                </div>
                {this.props.item.is_grant && 
                    <div className="card-section">
                        <h4>Grant Funding</h4>
                        <p>This is a grant!</p>
                    </div>
                }
                { this.props.buttonShould === 'delete' 
                    ? <button onClick={this.handleDelete}>Remove from Favorites</button> 
                    : <button onClick={() => handleFavorite(this.props.item, this.props.user)}>Add to Favorites</button> }
            </li>
        )
    }
}