import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import header from './header.css';

export default class MainNav extends Component {
    render() {
        return (
            <div>
                <nav>
                    <Link className="link" to='/'>Home</Link>
                    <Link className="link" to='/bookmarks'>Bookmarks</Link>
                    <Link className="link" to='/add'>Add a Residency</Link>
                    <Link className="link" to='/about'>About</Link>
                    <Link className="link" to='/tips'>Tips</Link>
                    <Link className="link" to='/admin/listings'>Listing Admin</Link>
                    <Link className="link" to='/admin/users'>User Admin</Link>
                    <Link className="link" to='/login'>Login</Link>
                </nav>
            </div>
        )
    }
}


