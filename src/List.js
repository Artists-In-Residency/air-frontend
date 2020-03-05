
import React, { Component } from 'react'

export default class List extends Component {
    render() {
        return (
            <div>
                {
                    this.props.resState.map(state => <div className="state-box">
                        {state.program_name} - {state.city} {state.state}
                    </div>)
                }
            </div>
        )
    }
}
