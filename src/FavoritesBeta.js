import React, { Component } from 'react';
import request from 'superagent';
import ResidencyCard from './ResidencyCard';
// import { getFavorites, getFavorites2 } from './api';

const user = JSON.parse(window.localStorage.getItem('user'));

export default class Favorites extends Component {
  
    state = {
        data: [],
        user: user
   }
    
  // const user = this.props.user;
        
    async componentDidMount() {
        console.log('USER!', this.state.user);
        console.log("PROPSSSSSSS", this.props )
        const URL = `${process.env.REACT_APP_DB_URL}/api/me/favorites`;
        const results = await request.get(URL)
            .set('Authorization', this.state.user.token);
        this.setState({ data: results.body });
    }

    // getFavorites2 = async () => {
    //     
    //     const URL = `${process.env.REACT_APP_DB_URL}/api/me/favorites`;
    //     console.log('Requesting favorites from', URL, this.props.user.id);
    //     console.log('WHAT PROPS, BRUH', this.props)
    //     const result = await request.get(URL).set('Authorization', this.props.user.id);
    //     return result.body;
    // }
    

    handleFavorite = async (passedItem) => {
        const URL = `${process.env.REACT_APP_DB_URL}/api/me/favorites/`;
        const newObj = {
            user_id: passedItem.userId,
            name: passedItem.name,
        }
        const result = await request.post(URL, newObj);
        this.setState({ data: result.body });
    }

    handleDelete = async (passedId) => {
        const URL = `${process.env.REACT_APP_DB_URL}/me/favorites/:${passedId}`;

        const result = await request.delete(URL);
        this.setState({ data: result.body });
    }

    handleSearch = async () => {
        const URL = `${process.env.REACT_APP_DB_URL}/search?query=${this.state.inputValue}`;
        const result = await request.get(URL);
        this.setState({ data: result.body });
    }

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
                <h3>Bookmarks</h3>
                <div className='card-container'>
                <ul className='residency-list'>
                    {this.state.data.map(item => <ResidencyCard item={item} key={item.id} />)}
                </ul>
                </div>
            </div>
        )
    }
}
