import React, { Component } from 'react';
// import { getPagedResidencies } from './api';
import request from 'superagent';

export const getPagedResidencies = async (value) => {
    this.setState({ page: this.state.page + value})
    const URL = `${process.env.REACT_APP_DB_URL}/listings/page/${value}`;
    console.log('Requesting paged residencies from', URL);
    const result = await request.get(URL);
    return result.body;
}

export default class Paging extends Component {
    state = 
    { page: 1, 
        
    }

    // changePage(value) {
    //     this.setState({ page: this.state.page + value})
    //     const queryString = window.location.hash.slice(1);
    //     const pageParams = new URLSearchParams(queryString);
    //     pageParams.set('page', this.state.page + value);
    //     pageParams.set('perPage', this.state.perPage)
    //     const paramToSet = pageParams.toString();
    //     window.location.hash = paramToSet;
    // }

    render() {
        if (!this.props.totalPage) {
            return <p className="paging">No results, try another search</p>;
          }

        return (
            <div className="paging">
                <button id="paging-button1" onClick={() => this.getPagedResidencies(-1)} disabled={this.state.page === 1}> LAST </button>
                <button id="paging-button2" onClick={() => this.getPagedResidencies(1)} disabled={this.state.page === this.props.totalPage}> NEXT </button>
                <h5>Page {this.state.page}/{this.props.totalPage}</h5>
            </div>
        )
    }
}