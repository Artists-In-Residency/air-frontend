import React, { Component } from 'react';
import './residency-card.css';
import request from 'superagent';
//import { getUserLogin } from './api';


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
    // state = { data: "", 
    //           user: {}
    //         }

    handleFavorite = async () => {
        console.log('HIIiiiiiiIiiiiiii');
        console.log(this.props);
        const URL = `${process.env.REACT_APP_DB_URL}/api/me/favorites`;
        const newObj = {
            user_id: this.props.user.id,
            name: this.props.item.id
        }
        
        console.log('newObj', newObj);
        const result = await request.post(URL, newObj).set('Authorization', this.props.user.token);
        console.log('result', result);
            // .then((result) => {
            //     this.setState({ data: result.body })
            // })
            // .catch((err) => {
            //     alert(err);
            // });
    }
    
    // async componentWillMount() {
    //     const userFromLocalStorage = getUserLogin();
    //     if (userFromLocalStorage) {
    //         this.setState({ user: userFromLocalStorage });
    //     }          
    // }

    

    render() {
        return (
            <li className='residency-card'>
                <div className='image-container'>
                        <img src={this.state.error || this.props.item.img_url ? this.props.item.img_url : 'http://placekitten.com/100/100'} onLoad={this.handleImageLoaded.bind(this)} onError={this.handleImageError.bind(this)} alt='pic'/>
                                {this.state.imageStatus}
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
                <button onClick={this.handleFavorite}>MAKE FAVORITE</button> 
            </li>
        )
    }
}