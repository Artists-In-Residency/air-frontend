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
                    <p><a href={this.props.item.link_url} target="_blank" rel="noopener noreferrer">Website</a></p>
                    {this.props.item.phone && <p>{this.props.item.phone}</p> }
                    {this.props.item.email && <p>{this.props.item.email}</p> }
                </div>
                {this.props.item.is_grant && 
                    <div className="card-section">
                        <h4>Grant Funding</h4>
                        <p>This is a grant!</p>
                    </div>
                }
                {/* Conditional button functionality based on passed state */}
                {this.props.buttonShould === 'delete' && <button onClick={this.handleDelete}>Remove Bookmark</button>}
                {this.props.buttonShould === 'edit' && <button onClick={this.handleEdit}>Edit</button>}
                {!this.props.buttonShould && <button onClick={ () => { handleFavorite(this.props.item, this.props.user); this.setState({ buttonText : 'Added!' });} }>{this.state.buttonText}</button>}
            </li>
        )
    }
}