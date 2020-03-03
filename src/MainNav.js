import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class MainNav extends Component {
    render() {
        return (
            <div>
                <nav>
                    <Link to='/'>Residencies</Link>
                    <Link to='/favorites'>Favorites</Link>
                    <Link to='/create'>Add a Residency</Link>
                    <Link to='/edit/1'>Edit a Residency</Link>
                    <Link to='/about'>About</Link>
                    <Link to='/login'>Login</Link>
                </nav>
            </div>
        )
    }
}


