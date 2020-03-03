import React, { Component } from 'react'
import request from 'superagent'

export default class AddResidency extends Component {
    state = {
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

    handleAddResidency = async (e) => {
        e.preventDefault();
        const URL=`${process.env.REACT_APP_DB_URL}/users/listings`;
        const newResidency = {
            program_name: this.state.program_name,
            address: this.state.address,
            city: this.state.city,
            state: this.state.state,
            zip_code: this.state.zip_code,
            phone_num: this.state.phone_num,
            email: this.state.email,
            art_medium: this.state.art_medium,
            img_url: this.state.img_url,
            link_url: this.state.link_url,
            description: this.state.description,
            is_grant: false
        }
        console.log('Adding: ', URL, newResidency);
        const result = await request.post(URL, newResidency);
        console.log('Result: ', result);
        // window.location = ('/');
    }

    render() {
        return (
            <form onSubmit={this.handleAddResidency}>
            <div className='add-residency-container'>
                <label>Program Name
                    <input onChange={(e) => this.setState({ program_name: e.target.value })} value={this.state.program_name} />
                </label>
                <label>Program website
                    <input onChange={(e) => this.setState({ link_url: e.target.value })} value={this.state.link_url} />
                </label>
                <label>Description
                    <input onChange={(e) => this.setState({ description: e.target.value })} value={this.state.description} />
                </label>
                <label>Street Address
                    <input onChange={(e) => this.setState({ address: e.target.value })} value={this.state.address} />
                </label>
                <label>City
                    <input onChange={(e) => this.setState({ city: e.target.value })} value={this.state.city} />
                </label>
                <label>State
                    <input onChange={(e) => this.setState({ state: e.target.value })} value={this.state.state} />
                </label>
                <label>Zip
                    <input onChange={(e) => this.setState({ zip: e.target.value })} value={this.state.zip} />
                </label>
                <label>Art medium
                    <input onChange={(e) => this.setState({ art_medium: e.target.value })} value={this.state.art_medium} />
                </label>
                <label>Image
                    <input onChange={(e) => this.setState({ img_url: e.target.value })} value={this.state.img_url} />
                </label>
                <label>Is this a grant?
                    <input type='radio' onChange={(e) => this.setState({ is_grant: e.target.value })} value="Yes" checked={this.state.is_grant === 'Yes'} />Yes
                    <input type='radio' onChange={(e) => this.setState({ is_grant: e.target.value })} value="No" checked={this.state.is_grant === 'No'} />No
                </label>
            </div>
            <button onClick={(e) => this.handleAddResidency}>Add Residency</button>
            </form>
        )
    }
}
