import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class MainNav extends Component {

    render() {

        let isLoggedIn = false;
        if ((this.props.user) && Object.keys(this.props.user).length !== 0) {
            isLoggedIn = true;
        }    

        return (
                <nav>
                    <Link to='/'>Home</Link>
                    <Link to='/tips'>Tips</Link>
                    <Link to='/about'>About</Link>
                    {!isLoggedIn &&
                    <div className='welcome'>
                        <Link to='/login'>Login</Link>
                    </div>}
                    {isLoggedIn &&
                    <div className='welcome'>
                        <Link to='/bookmarks'>Bookmarks</Link>
                        <Link to='/add'>Add a Residency</Link>
                        <Link to='/my/listings'>My Residencies</Link>
                        <Link to='/login'>{'Hello ' + this.props.user.displayName + '!'}</Link>
                    </div>}
                </nav>
        )
    }
}


