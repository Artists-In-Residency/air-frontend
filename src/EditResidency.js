import React, { Component } from 'react'
import request from 'superagent'
import ResidencyForm from './ResidencyForm'


export default class EditResidency extends Component {
    state = {
        data: [],
    }

    componentDidMount = async () => {
        this.getResidency();
    }
    
    getResidency = async () => {
        const URL = `${process.env.REACT_APP_DB_URL}/listings/${this.props.match.params.id}`;
        console.log('Requesting residency with ID of', this.props.match.params.id, 'from', URL);
        const result = await request.get(URL);
        this.setState({ data: result.body });
    }

    // Form component passes back state. Function also needs event. So we need a function to eat a function.
    handleEditResidency = (residency) => async (e) => {
        e.preventDefault();
        const URL=`${process.env.REACT_APP_DB_URL}/users/listings/${this.props.match.params.id}`;        
        console.log('Editing via URL: ', URL);
        console.log('Editing: ', residency);
        const result = await request.put(URL, residency);
        console.log('Post results:', result.body);
        // window.location = ('/');
    }


    render() {
        return (
            <div className='edit-residency-container'>
                <h2>Edit Residency</h2>
                {/* Use spread operator to 'flatten' all key/value pairs in newResidency and pass them as individual props */}
                <ResidencyForm {...this.state.data} handleFormSubmit={this.handleEditResidency} />
            </div>

        )
    }
}
