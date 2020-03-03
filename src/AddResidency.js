import React, { Component } from 'react'
import request from 'superagent'
import ResidencyForm from './ResidencyForm'

export default class AddResidency extends Component {
    state = {
        newResidency : {
            program_name: 'test',
            address: '',
            city: '',
            state: '',
            zip_code: '',
            phone_num: '',
            email: '',
            art_medium: '',
            img_url: '',
            link_url: '',
            description: '',
            is_grant: false
        }
    }

    handleAddResidency = (residency) => async (e) => {
        e.preventDefault();
        const URL=`${process.env.REACT_APP_DB_AUTH_URL}/users/listings`;        
        console.log('Adding: ', URL, residency);
        const result = await request.post(URL, residency);
        (console.log('Post results:', result.body);
        // window.location = ('/');
    }

    render() {
        return (
            <div className='add-residency-container'>
                <h2>Add Residency</h2>
                // Use spread operator to 'flatten' all key/value pairs in newResidency and pass them as individual props
                <ResidencyForm {...this.state.newResidency} handleFormSubmit={this.handleAddResidency} />
            </div>
        )
    }
}
