import React, { Component } from 'react';
import request from 'superagent'
import { handleFavorite } from './api.js'
import './residency-card.css';

const user = JSON.parse(window.localStorage.getItem('user'));

export default class ResDetailItem extends Component {

    state = {
        residency : {},
        buttonText : 'Bookmark'
    }
    componentDidMount = async() => {
        const resInfo = await request.get(`${process.env.REACT_APP_DB_URL}/listings/${this.props.match.params.residencyId}`);
      
        if (resInfo.body) {
          this.setState({residency: resInfo.body[0]})
        }
      } 
    
    render() {
        return (
            <div className='residency-detail'>
                <div className='detail-container'>
                    <div className='image-container'>
                        <img className='detail-image' src={this.state.residency.img_url} alt={this.state.residency.program_name} />
                    </div>
                    <h3>{this.state.residency.program_name}</h3>
                    <p>{this.state.residency.description}</p>
                    <div className='detail-section'>
                        <h4>Supported Mediums</h4>
                        <div id='medium'>{this.state.residency.art_medium}</div>
                    </div>
                    <div className='detail-section'>

                    {this.state.residency.city && 
                    <div className='card-section-city-state-country'>
                        <h4>Location</h4>
                        {this.state.residency.address}<br></br>
                        {this.state.residency.city}{this.state.residency.state &&<>, {this.state.residency.state}</>} {this.state.residency.zip_code &&<> {this.state.residency.zip_code}</>}{this.state.residency.country &&<> - {this.state.residency.country}</>} 
                    </div>
                }
                    </div>
                    <div className='detail-section'>
                        <h4>Contact Info</h4>
                        {this.state.residency.phone_num &&<> {this.state.residency.phone_num}</>} 
                        <br />
                        {this.state.residency.email &&<> {this.state.residency.email}</>} 
                    </div>
                    <div className="detail-section">
                    {this.state.residency.is_grant && 
                    <div className="card-section-grant">
                        <h4>Grant Funding</h4>
                        <br></br>
                    </div>
                }
                    </div>
                    <p><a tag="link" href={this.state.residency.link_url} target="_blank" rel="noopener noreferrer">Program Website</a></p>
                    <button onClick={ () => { handleFavorite(this.state.residency, this.props.user); this.setState({ buttonText : 'Added!' });} }>{this.state.buttonText}</button>
                </div>
            </div>
        )
    }
}