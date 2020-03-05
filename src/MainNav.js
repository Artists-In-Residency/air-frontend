import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import Search from './Search.js';

export default class MainNav extends Component {
    render() {
        return (
                <nav>
                    <Link to='/'>Home</Link>
                    <Link to='/tips'>Tips</Link>
                    <Link to='/about'>About</Link>
                    {this.props.user && <Link to='/login'>Login</Link>}
                    {/* <Link to='/admin/listings'>Listing Admin</Link>
                    <Link to='/admin/users'>User Admin</Link> */}
                    {this.props.user &&
                    <div className='welcome'>
                        <Link to='/bookmarks'>Bookmarks</Link>
                        <Link to='/add'>Add a Residency</Link>
                        <Link to='/my/listings'>My Residencies</Link>
                        <Link to='/login'>{this.props.user.displayName ? 'Hello ' + this.props.user.displayName + '!' : '' }</Link>
                    </div>}
                </nav>
        )
    }
}


