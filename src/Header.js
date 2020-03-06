import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import MainNav from './MainNav.js'

export default class Header extends Component {


    render() {
        return (
            <header className="App-header">
                <Link to='/'><h1>AIRSupply</h1></Link>
                <MainNav user={this.props.user} />
            </header>  
        )
    }
}
