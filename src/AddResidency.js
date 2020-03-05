import React, { Component } from 'react'
import request from 'superagent'
import ResidencyForm from './ResidencyForm'

export default class AddResidency extends Component {
    state = {
        newResidency : {
            program_name: '',
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

    // Form component passes back state. Function also needs event. So we need a function to eat a function.
    handleAddResidency = (residency) => async (e) => {
        e.preventDefault();
        
        //constructing an address to pass to the geocode api
        const address = (residency.address + '+' + residency.city + '+' + residency.state + '+' + residency.zip_code);
        //fetch address fro=[][p-0q``           `]
        const geoURL = `${process.env.REACT_APP_DB_URL}/api/me/geocode?search=${address}`

        const mapResult = await request.get(geoURL)
            .set('Authorization', this.props.user.token);
        
        const lat = mapResult.body.results[0].geometry.location.lat;
        const lng = mapResult.body.results[0].geometry.location.lng;
        residency.lat = lat;
        residency.long = lng;
        console.log(residency)
        const URL=`${process.env.REACT_APP_DB_URL}/api/me/listings`;        
        console.log('Adding via URL: ', URL);
        console.log('Posting: ', residency);
        const result = await request
            .post(URL, residency)
            .set('Authorization', this.props.user.token);
        console.log('Post results:', result.body);
        // window.location = ('/');
    }

    render() {
        return (
            <div className='add-residency-container'>
                <h2>Add Residency</h2>
                {/* Use spread operator to 'flatten' all key/value pairs in newResidency and pass them as individual props */}
                <ResidencyForm {...this.state.newResidency} handleFormSubmit={this.handleAddResidency} />
            </div>
        )
    }
}
