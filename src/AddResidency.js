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
        //create URL string for fetch route
        const geoURL = `${process.env.REACT_APP_DB_URL}/api/me/geocode?search=${address}`
        //fetch lat / long from geocode api
        const mapResult = await request.get(geoURL)
            .set('Authorization', this.props.user.token);
        
        //insert new key/value pair into residency object from newly fetched data
        residency.lat = mapResult.body.results[0].geometry.location.lat;
        residency.long = mapResult.body.results[0].geometry.location.lng;
      
        //create URL string for posting new resident route
        const URL=`${process.env.REACT_APP_DB_URL}/api/me/listings`;        
        //post that newly constructed residency into the database yo! 
        const result = await request
            .post(URL, residency)
            .set('Authorization', this.props.user.token);
        //thank the user for their contribution and redirect them back home
        alert('New Residency Added! Thank You!')
        window.location = ('/');
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
