import React, { Component } from 'react';
import request from 'superagent';
import ResidencyCard from './ResidencyCard';

import './residency-card.css';


export default class Home extends Component {
    state = {
        data: [],
        user: {}
   }

    async componentDidMount() {
        const URL = `${process.env.REACT_APP_DB_URL}/api/me/listings`;
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
                <h2>Residencies I've Contributed</h2>
                <div className='card-container'>
                <ul className='residency-list'>
                // three places in your app, you map over arrays and return ResidencyCards. Seems like a good use case for a component
                    {this.state.data.map(item => <ResidencyCard item={item} user={this.props.user} buttonShould={'edit'} key={item.id} />)}
                </ul>
                </div>
            </div>
        )
    }
}
