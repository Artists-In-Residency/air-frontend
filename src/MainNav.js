import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class MainNav extends Component {
    render() {
        return (
            <div>
                <nav>
                    <Link to='/'>Home</Link>
                    <Link to='/bookmarks'>Bookmarks</Link>
                    <Link to='/add'>Add a Residency</Link>
                    <Link to='/about'>About</Link>
                    <Link to='/tips'>Tips</Link>
                    <Link to='/my/listings'>My Residencies</Link>
                    <Link to='/admin/listings'>Listing Admin</Link>
                    <Link to='/admin/users'>User Admin</Link>
                    <Link to='/login'>Login</Link>
                </nav>
            </div>
        )
    }
}


