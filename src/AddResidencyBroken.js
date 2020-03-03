import React, { Component } from 'react'
import request from 'superagent'
import ResidencyForm from './ResidencyFormBroken'

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

    handleAddResidency = async (residency) => {
        const URL=`${process.env.REACT_APP_DB_AUTH_URL}/users/listings`;        
        const result = await request.post(URL, residency);
        console.log('Adding: ', URL, residency);
        // window.location = ('/');
    }

    render() {
        return (
            <div className='add-residency-container'>
                <h2>Add Residency</h2>
                <ResidencyForm residency={this.state.newResidency} handleSubmitForm={this.handleAddResidency} />
            </div>
            <div className='edit-residency-container'>
                <h2>Edit Residency</h2>
                <ResidencyForm residency={this.state.existingResidency} handleSubmitForm={this.handleEditResidency} />
            </div>
        )
    }
}
