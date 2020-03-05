import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import MainNav from './MainNav.js'

export default class Header extends Component {


    render() {
        console.log('Header props', this.props);
        return (
            <header className="App-header">
                <Link to='/'><h1>Artist Residencies Listings</h1></Link>
                <MainNav />
                <div className='welcome'>
                {this.props.user.displayName ? 'Hello ' + this.props.user.displayName + '!' : '' }
                </div>
            </header>  
        )
    }
}
