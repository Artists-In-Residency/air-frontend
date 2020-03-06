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
        };
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
                window.location=('/favorites');
            })
            .catch((err) => { 
                alert(err); 
                console.log(err);
            })       
    }

    handleEdit = async () => {
        window.location=(`/edit/${this.props.item.id}`);
    }

    // renderButtonSwitch (buttonShould) {
    //     switch (buttonShould) {
    //         case 'delete': return <button onClick={this.handleDelete}>Remove from Bookmarks</button>;
    //         case 'edit': { this.setState({buttonText: 'Edit'}); 
    //                         return (<button onClick={this.handleEdit}>{this.state.buttonText}</button>);
    //                         }
    //         default: return (<button onClick={() => { handleFavorite(this.props.item, this.props.user); this.setState({ buttonText : 'Added!' }) }}>{this.state.buttonText}</button>) 
    //     }
    // }
     

    render() {
        return (
            <li className='residency-card'>
                <div className='image-container'>
                    <a href={`/listings/${this.props.item.id}`}>
                        <img src={this.state.error || this.props.item.img_url ? this.props.item.img_url : 'http://placekitten.com/100/100'} onLoad={this.handleImageLoaded.bind(this)} onError={this.handleImageError.bind(this)} alt='pic'/>
                                {this.state.imageStatus}
                    </a>
                </div>
               
                <h3><a href={`/listings/${this.props.item.id}`}><div className='card-section-program-name'>{this.props.item.program_name}</div></a></h3>
                <div className='card-section-description'>
                <p>{this.props.item.description}</p></div>
                <div className='card-section-mediums'>
                    <h4>Supported Mediums</h4> 
                    {this.props.item.art_medium}
                </div> 
                {this.props.item.city && 
                    <div className='card-section-city-state-country'>
                        <h4>Location</h4>
                        {this.props.item.city}{this.props.item.state &&<>, {this.props.item.state}</>} {this.props.item.country &&<> - {this.props.item.country}</>} 
                    </div>
                }
                <div className='card-section-website'>
                    {/* <h4>Contact Info</h4> */}
                    <p><a href={this.props.item.link_url} target="_blank" rel="noopener noreferrer">Website</a></p>
                    {/* {this.props.item.phone && <p>{this.props.item.phone}</p> }
                    {this.props.item.email && <p>{this.props.item.email}</p> } */}
                </div>
                {this.props.item.is_grant && 
                    <div className="card-section-grant">
                        <h4>Grant Funding</h4>
                        <br></br>
                    </div>
                }
                {/* Conditional button functionality based on passed state */}
                <div className='bookmark-button'>
                {this.props.buttonShould === 'delete' && <button onClick={this.handleDelete}>Remove Bookmark</button>}
                {this.props.buttonShould === 'edit' && <button onClick={this.handleEdit}>Edit</button>}
                {!this.props.buttonShould && <button onClick={ () => { handleFavorite(this.props.item, this.props.user); this.setState({ buttonText : 'Added!' });} }>{this.state.buttonText}</button>}
                </div>
            </li>
        )
    }
}