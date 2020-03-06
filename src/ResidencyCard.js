import React, { Component } from 'react';
import './residency-card.css';
import request from 'superagent';
import { handleFavorite } from './api.js'

export default class ResidencyCard extends Component {

    //stuff to do error handling when an image is 404
    constructor(props) {
        super(props);
        this.state = { 
            imageStatus: "", 
            error: false, 
            buttonText: 'Bookmark',
            placeholderImg: ['../assets/bg1.jpg', '../assets/bg2.jpg', '../assets/bg3.jpg', '../assets/bg4.jpg'] 
        };
      }
    
    getRandomPlaceholder = () => {
        const index = Math.floor(Math.random() * this.state.placeholderImg.length);
        const placeholder = this.state.placeholderImg[index];
        return placeholder;
    }

    capitalize = (str) => {
        if (typeof str !== 'string') return ''
        return str.charAt(0).toUpperCase() + str.slice(1)
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
                window.location=('/bookmarks');
            })
            .catch((err) => { 
                alert(err); 
                console.log(err);
            })       
    }

    handleEdit = async () => {
        window.location=(`/edit/${this.props.item.id}`);
    }
     

    render() {
        let source;
        if (this.state.error || !this.props.item.img_url) {
            source = this.getRandomPlaceholder();
        } else {
            source = this.props.item.img_url;
        } 
        return (
            <li className='residency-card'>
                <div className='image-container'>
                    <a href={`/listings/${this.props.item.id}`}>
                        <img src={source} onLoad={this.handleImageLoaded.bind(this)} onError={this.handleImageError.bind(this)} alt='pic'/>
                                {this.state.imageStatus}
                    </a>
                </div>
               
                <h3><a href={`/listings/${this.props.item.id}`}><div className='card-section-program-name'>{this.props.item.program_name}</div></a></h3>
                <div className='card-section-description'>
                <p>{this.capitalize(this.props.item.description)}</p></div>
                {this.props.item.art_medium &&
                    <div className='card-section-mediums'>
                        <h4>Supported Mediums</h4> 
                        {this.props.item.art_medium}
                    </div> 
                }
                {this.props.item.city && 
                    <div className='card-section-city-state-country'>
                        <h4>Location</h4>
                        {this.props.item.city}{this.props.item.state &&<>, {this.props.item.state}</>} {this.props.item.country &&<> - {this.props.item.country}</>} 
                    </div>
                }
                <div className='card-section-website'>
                    <p><a href={this.props.item.link_url} target="_blank" rel="noopener noreferrer">Website</a></p>
                </div>
                {this.props.item.is_grant && 
                    <div className="card-section-grant">
                        <h4><b>Grant Funding</b></h4>
                        <br></br>
                    </div>
                }
                {/* Conditional button functionality based on passed state */}
                <div className='bookmark-button'>
                    {this.props.buttonShould === 'delete' && 
                        <button onClick={this.handleDelete}>Remove Bookmark</button>}
                    {this.props.buttonShould === 'edit' && 
                        <button onClick={this.handleEdit}>Edit</button>}
                    {!this.props.buttonShould && 
                        <button onClick={ () => { 
                            handleFavorite(this.props.item, this.props.user); 
                            this.setState({ buttonText : 'Added!' });} 
                            }>{this.state.buttonText}
                        </button>}
                </div>
            </li>
        )
    }
}