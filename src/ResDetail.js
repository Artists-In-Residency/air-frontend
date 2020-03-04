import React, { Component } from 'react'
import ResidencyCard from './ResidencyCard.js';
import request from 'superagent';

export default class ResDetail extends Component {
  state = { residency: [] }

  componentDidMount = async() => {
    const resInfo = await request.get(`${process.env.REACT_APP_DB_URL}/listings/${this.props.match.params.residencyId}`);
  
    if (resInfo.body) {
      this.setState({residency: resInfo.body[0]})
    }
  } 
  
  render() {
      console.log(this.props.match.params.id)
  
      const { residency } = this.state;
 
    return (
      <>
        {residency.id && <ResidencyCard item={ residency } />}
      </>
    )
  }
};