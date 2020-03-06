import React, { Component } from 'react'
import './search.css';

export default class ResidencyForm extends Component {

    state = {
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
                        <option value="" selected disabled hidden>--</option>
                        <option value="AL">AL</option>
                        <option value="AK">AK</option>
                        <option value="AZ">AZ</option>
                        <option value="AR">AR</option>
                        <option value="CA">CA</option>
                        <option value="CO">CO</option>
                        <option value="CT">CT</option>
                        <option value="DC">DC</option>
                        <option value="DE">DE</option>
                        <option value="FL">FL</option>
                        <option value="GA">GA</option>
                        <option value="HI">HI</option>
                        <option value="ID">ID</option>
                        <option value="IL">IL</option>
                        <option value="IN">IN</option>
                        <option value="IA">IA</option>
                        <option value="KS">KS</option>
                        <option value="KY">KY</option>
                        <option value="LA">LA</option>
                        <option value="ME">ME</option>
                        <option value="MD">MD</option>
                        <option value="MA">MA</option>
                        <option value="MI">MI</option>
                        <option value="MN">MN</option>
                        <option value="MS">MS</option>
                        <option value="MO">MO</option>
                        <option value="MT">MT</option>
                        <option value="NE">NE</option>
                        <option value="NV">NV</option>
                        <option value="NH">NH</option>
                        <option value="NJ">NJ</option>
                        <option value="NY">NY</option>
                        <option value="NC">NC</option>
                        <option value="ND">ND</option>
                        <option value="OH">OH</option>
                        <option value="OK">OK</option>
                        <option value="OR">OR</option>
                        <option value="PA">PA</option>
                        <option value="RI">RI</option>
                        <option value="SC">SC</option>
                        <option value="SD">SD</option>
                        <option value="TN">TN</option>
                        <option value="TX">TX</option>
                        <option value="UT">UT</option>
                        <option value="VT">VT</option>
                        <option value="VA">VA</option>
                        <option value="WA">WA</option>
                        <option value="WI">WI</option>
                        <option value="WY">WY</option>
                    </select>
                </label>
                <label>Zip
                    <input type='number' onChange={(e) => this.setState({ zip_code: Number(e.target.value) })} value={this.state.zip_code} />
                </label>
                <label>Art medium
                    <input onChange={(e) => this.setState({ art_medium: e.target.value })} value={this.state.art_medium} />
                </label>
                {/* <label>Image
                    <input onChange={(e) => this.setState({ img_url: e.target.value })} value={this.state.img_url} />
                </label> */}
                {/* <label>Is this a grant?
                    <input type='radio' onChange={(e) => this.setState({ is_grant: e.target.value })} value="Yes" checked={this.state.is_grant === 'Yes'} />Yes
                    <input type='radio' onChange={(e) => this.setState({ is_grant: e.target.value })} value="No" checked={this.state.is_grant === 'No'}s />No
                </label> */}
            </div>
            <button>Submit</button>
            </form>
        )
    }
}
