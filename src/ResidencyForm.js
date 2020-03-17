import React, { Component } from 'react'
import './search.css';

export default class ResidencyForm extends Component {

    state = {
        // nice initializin'
            program_name: this.props.program_name,
            address: this.props.address,
            city: this.props.city,
            state: this.props.state,
            zip_code: this.props.zip_code,
            phone_num: this.props.phone_num,
            email: this.props.email,
            art_medium: this.props.art_medium,
            img_url: this.props.img_url,
            link_url: this.props.link_url,
            description: this.props.description,
            is_grant: false
    }
        
    render() {
        return (
            <form onSubmit={this.props.handleFormSubmit(this.state)}>
            <div className='form-container'>
                <label>Program Name
                    <input onChange={(e) => this.setState({ program_name: e.target.value })} value={this.state.program_name} />                        
                </label>
                { this.props.edit &&
                    <div className='img_url-container'>
                        <img src={this.props.img_url} alt={this.props.program_name} />
                    </div>
                }
                <label>Image URL
                    <input onChange={(e) => this.setState({ img_url: e.target.value })} value={this.state.img_url} />
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
                    <select className = "dropdown" name="state" onChange={(e) => this.setState({ state: e.target.value })} value={this.state.state}>
                    // i know you need to hard code it, but i'd still rather see you make an array of abbreviations, then map over it to make these options
                        <option value="" selected disabled hidden>--</option>
                        {
                            
                            abbreviationArray.map(abb => <option value={abb}>{abb}</option>)     

                            }
                    </select>
                </label>
                <label>Zip
                    <input type='number' onChange={(e) => this.setState({ zip_code: Number(e.target.value) })} value={this.state.zip_code} />
                </label>
                <label>Art medium
                    <input onChange={(e) => this.setState({ art_medium: e.target.value })} value={this.state.art_medium} />
                </label>
            </div>
            <button>Submit</button>
            </form>
        )
    }
}
