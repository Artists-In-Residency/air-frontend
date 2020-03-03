import React, { Component } from 'react'
import { Link, BrowserRouter } from 'react-router-dom';

export default class MainNav extends Component {
    render() {
        return (
            <div>
                <nav>
                    {/* <BrowserRouter> */}
                        <Link to='/'>Home</Link>
                        <Link to='/about'>About</Link>
                        <Link to='/favorites'>Favorites</Link>
                        <Link to='/login'>Login</Link>
                    {/* </BrowserRouter> */}
                </nav>
            </div>
        )
    }
}


