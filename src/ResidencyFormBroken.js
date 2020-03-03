import React, { Component } from 'react'

export default class ResidencyForm extends Component {
    state = {
        residency: {
            program_name: this.props.residency.program_name,
            address: this.props.residency.address,
            city: this.props.residency.city,
            state: this.props.residency.state,
            zip_code: this.props.residency.zip_code,
            phone_num: this.props.residency.phone_num,
            email: this.props.residency.email,
            art_medium: this.props.residency.art_medium,
            img_url: this.props.residency.img_url,
            link_url: this.props.residency.link_url,
            description: this.props.residency.description,
            is_grant: false
        }
    }

    render() {

        const { program_name } = this.state.residency;

        return (
            // THIS IS BROKEN AND IT'S FRUSTRATING
            
            <form onSubmit={this.props.handleFormSubmit}> {program_name}
            <div className='form-container'>
                <label>Program Name
                    <input onChange={(e) => {
                        console.log(e)
                    this.setState({ residency : { program_name: e.target.value, ...this.state.residency } })}
                     } value={this.state.residency.program_name} />
                        
                </label>
                <label>Program website
                    <input onChange={(e) => this.setState({ link_url: e.target.value })} value={this.props.residency.link_url} />
                </label>
                <label>Description
                    <input onChange={(e) => this.setState({ description: e.target.value })} value={this.props.residency.description} />
                </label>
                <label>Street Address
                    <input onChange={(e) => this.setState({ address: e.target.value })} value={this.props.residency.address} />
                </label>
                <label>City
                    <input onChange={(e) => this.setState({ city: e.target.value })} value={this.props.residency.city} />
                </label>
                <label>State
                    <input onChange={(e) => this.setState({ state: e.target.value })} value={this.props.residency.state} />
                </label>
                <label>Zip
                    <input onChange={(e) => this.setState({ zip: e.target.value })} value={this.props.residency.zip} />
                </label>
                <label>Art medium
                    <input onChange={(e) => this.setState({ art_medium: e.target.value })} value={this.props.residency.art_medium} />
                </label>
                <label>Image
                    <input onChange={(e) => this.setState({ img_url: e.target.value })} value={this.props.residency.img_url} />
                </label>
                <label>Is this a grant?
                    <input type='radio' onChange={(e) => this.setState({ is_grant: e.target.value })} value="Yes" checked={this.props.residency.is_grant === 'Yes'} />Yes
                    <input type='radio' onChange={(e) => this.setState({ is_grant: e.target.value })} value="No" checked={this.props.residency.is_grant === 'No'} />No
                </label>
            </div>
            <button onClick={(e) => this.props.handleSubmitForm(this.state.residency)}>Add/Edit Residency</button>
            </form>
        )
    }
}
