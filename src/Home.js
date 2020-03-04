import React, { Component } from 'react'
import Search from './Search';

export default class Home extends Component {
    render() {
        return (
            <div>
                    <p>Include:</p>
                    <p>Google Map</p>
                    <Search />
                    <p>Initial pstings shown on Google Map</p>
            </div>
        )
    }
}
