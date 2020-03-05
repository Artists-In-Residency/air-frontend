import React, { Component } from 'react';
import request from 'superagent'
import './residency-card.css';

export default class ResDetailItem extends Component {

    state = {
        residency : {}
    }
    componentDidMount = async() => {
        const resInfo = await request.get(`${process.env.REACT_APP_DB_URL}/listings/${this.props.match.params.residencyId}`);
      
        if (resInfo.body) {
          this.setState({residency: resInfo.body[0]})
        }
      } 
    
    handleFavorite = async () => {
        console.log('HIIiiiiiiIiiiiiii');
        console.log(this.props);
        const URL = `${process.env.REACT_APP_DB_URL}/api/me/favorites`;
        const newObj = {
            user_id: this.props.user.id,
            name: this.state.residency.id
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

    render() {
        return (
            <div className='residency-detail'>
                <div className='image-container'>
                    <img src={this.state.residency.img_url} alt={this.state.residency.program_name} />
                </div>
                <h3>{this.state.residency.program_name}</h3>
                <p>{this.state.residency.description}</p>
                <p>Mediums: {this.state.residency.art_medium}</p> 
                <div className='address-container'>
                    <h4>Address</h4>
                    {this.state.residency.address}<br />
                    {this.state.residency.city}, {this.state.residency.state} {this.state.residency.zip_code}
                </div>
                <div className='contact-container'>
                    <h4>Contact Info</h4>
                    {this.state.residency.phone_num}<br />
                    {this.state.residency.email}
                </div>
                <div className="grant-container">
                    <h4>Grant Funding</h4>
                    <p>{this.state.residency.is_grant}</p>
                </div>
                <p><a href={this.state.residency.link_url}>Check it out</a></p>
                <button onClick={this.handleFavorite}>MAKE FAVORITE</button> 
            </div>
        )
    }
}