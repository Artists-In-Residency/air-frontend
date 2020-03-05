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

    render() {
        return (
            <div>
                <h3>Bookmarks</h3>
                <div className='card-container'>
                <ul className='residency-list'>
                    {this.state.data.map(item => <ResidencyCard item={item} user={this.props.user} buttonShould={'delete'} key={item.id} />)}
                </ul>
                </div>
            </div>
        )
    }
}
