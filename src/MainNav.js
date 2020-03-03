import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class MainNav extends Component {
    render() {
        return (
            <div>
                <nav>
                    <Link to='/'>Residencies</Link>
                    <Link to='/favorites'>Favorites</Link>
                    <Link to='/create'>Post a Residency</Link>
                    <Link to='/edit'>Edit a Residency</Link>
                    <Link to='/about'>About</Link>
                    <Link to='/login'>Login</Link>
                </nav>
            </div>
        )
    }
}


