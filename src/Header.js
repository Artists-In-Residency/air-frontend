import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import MainNav from './MainNav.js'

export default class Header extends Component {


    render() {
        return (
            <header className="App-header">
                <Link to='/'><h1>airSupply</h1></Link>
                <h6 id="tag-line">an artist in residency world list</h6>
                <MainNav user={this.props.user} />
            </header>  
        )
    }
}
