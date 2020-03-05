import React, { Component } from 'react';
import './residency-card.css';

// function tryThing(params) {

//     let msg = (params.msg) ? params.msg : (function(){throw "error"}());

//     // do stuff if everything inside `params` is defined
// }

// function imgError(image) {
//     image.onerror = "";
//     image.src = "http://placekitten.com/200/200";
//     return true;}



export default class ResidencyCard extends Component {
    constructor(props) {
        super(props);
        this.state = { imageStatus: "loading", error: false };
      }
    
      handleImageLoaded() {
        this.setState({ imageStatus: "loaded", error: false });
      }
    
      handleImageError() {
        this.setState({ imageStatus: "failed to load", error: true });
      }

    render() {
        return (
            <li className='residency-card'>
                <div className='image-container'>
                        <img src={this.state.error || this.props.item.img_url ? this.props.item.img_url : 'https://www.dropbox.com/s/6yctk83lzczg443/62bolt.png'} onLoad={this.handleImageLoaded.bind(this)} onError={this.handleImageError.bind(this)} alt='pic'/>
                                {this.state.imageStatus}
                    {/* <img src={this.props.item.img_url ? this.props.item.img_url : 'http://placekitten.com/100/100' } onError="imgError(this);" alt='pic' /> */}
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