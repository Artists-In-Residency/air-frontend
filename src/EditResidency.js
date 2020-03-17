import React, { Component } from 'react'
import request from 'superagent'
import ResidencyForm from './ResidencyForm'


export default class EditResidency extends Component {
    state = {
        /* Initialize to null for the sake of conditional render (see below) */
        data: null,
    }

    componentDidMount = async () => {
        this.getResidency();
    }
    
    getResidency = async () => {
        // seems like this should be in api.js with the rest of your async calls
        const URL = `${process.env.REACT_APP_DB_URL}/listings/${this.props.match.params.id}`;
        console.log('Requesting residency with ID of', this.props.match.params.id, 'from', URL);
        const result = await request.get(URL);
        this.setState({ data: result.body[0] });
        console.log('Get results:', result.body[0]);
        console.log('State:', this.state.data);
    }

    // Form component passes back state. Function also needs event. So we need a function to eat a function.
    handleEditResidency = (residency) => async (e) => {
        e.preventDefault();
        // seems like this should be in api.js with the rest of your async calls
        const URL=`${process.env.REACT_APP_DB_URL}/api/me/admin/listings/${this.props.match.params.id}`;        
        console.log('Putting via URL: ', URL);
        console.log('Putting: ', residency);
        await request.put(URL, residency)
            .set('Authorization', this.props.user.token)
            .then((result) => {
                // No body is returned from put
                console.log('Put result', result);
                this.props.history.push('/');
            })
            .catch((err) => { 
                alert(err); 
                console.log(err);
            })       
    }


    render() {
        console.log('data', this.state.data);
        return (
            <div className='edit-residency-container'>
                <h2>Edit Residency</h2>
                {/* Use spread operator to 'flatten' all key/value pairs in newResidency and pass them as individual props */}
                {/* Conditionally load the form - wait until the data has been acquired first, otherwise state in ResidencyForm can't be set properly */}
                { this.state.data && <ResidencyForm {...this.state.data} handleFormSubmit={this.handleEditResidency} edit={true} /> }
            </div>

        )
    }
}
