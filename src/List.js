
import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import ResidencyCard from './ResidencyCard.js';

export default class List extends Component {
    render() {
        const program = this.props.resState.map((object, index) => 
            <Link to={`listings/${object.id}`}>
            <ResidencyCard user={this.props.user} item={object} key={index} />
            </Link>)
        return (

                <main>
                  <ul className='residency-list'>
                    {program}
                  </ul>
                </main>
          );
        };
      };

