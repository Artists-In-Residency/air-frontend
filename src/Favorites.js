import React, { Component } from 'react';
import request from 'superagent';
import ResidencyCard from './ResidencyCard';
// import { getFavorites, getFavorites2 } from './api';

// const user = JSON.parse(window.localStorage.getItem('user'));

export default class Favorites extends Component {
  
    state = {
        data: [],
        user: {}
   }
    
  // const user = this.props.user;
        
    async componentDidMount() {
        const URL = `${process.env.REACT_APP_DB_URL}/api/me/favorites`;
        console.log('USER IS', this.props.user);
        await request.get(URL)
            .set('Authorization', this.props.user.token)
            .then((results) => {
                // No body is returned from put
                console.log('Get results', results);
                this.setState({ data: results.body });
            })
            .catch((err) => { 
                alert(err); 
                console.log(err);
            })       
    }

    // getFavorites2 = async () => {
    //     
    //     const URL = `${process.env.REACT_APP_DB_URL}/api/me/favorites`;
    //     console.log('Requesting favorites from', URL, this.props.user.id);
    //     console.log('WHAT PROPS, BRUH', this.props)
    //     const result = await request.get(URL).set('Authorization', this.props.user.id);
    //     return result.body;
    // }
    

    // getUser = () => {
    //     console.log('Getting user');
    //     const user = JSON.parse(localStorage.getItem('user'));
    //     this.setState({ 
    //       userName: user.display_name, 
    //       userToken: user.token,
    //       userId: user.id 
    //     });
    //   }
    
      // Make sure user info is loaded into state for authorization use before making API calls
    //   componentWillMount() {
    //     this.getUser();
    //   }

    render() {
        console.log(this.props, 'AHHHHHHHH');
        return (
            <div>
                <h3>Favorites</h3>
                <div className='card-container'>
                <ul className='residency-list'>
                    {this.state.data.map(item => <ResidencyCard item={item} user={this.props.user} buttonShould={'delete'} key={item.id} />)}
                </ul>
                </div>
            </div>
        )
    }
}
