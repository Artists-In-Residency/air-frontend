import React, { Component } from 'react';
import request from 'superagent';
import ResidencyCard from './ResidencyCard';
export default class Bookmarks extends Component {
  
    state = {
        data: [],
        user: {}
   }

    async componentDidMount() {
        const URL = `${process.env.REACT_APP_DB_URL}/api/me/favorites`;
        await request.get(URL)
            .set('Authorization', this.props.user.token)
            .then((results) => {
                this.setState({ data: results.body });
            })
            .catch((err) => { 
                alert(err); 
                console.log(err);
            })       
    }

    render() {
        return (
            <div>
                <h2>My Bookmarks</h2>
                <div className='card-container'>
                <ul className='residency-list'>
                    {this.state.data.map(item => <ResidencyCard item={item} user={this.props.user} buttonShould={'delete'} key={item.id} />)}
                </ul>
                </div>
            </div>
        )
    }
}
