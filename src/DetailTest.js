import React, { Component } from 'react'

export default class DetailTest extends Component {
    render() {
        const resultsArray = this.props.results;
        const resultsElements = resultsArray.map((obj) => {
            return (
                <div>
                    lat={obj.lat}
                    lng={obj.lng}
                    text={obj.text}
                </div>)
        });
        return ( resultsElements );
    }
    }



{/* <DetailTest
lat={45.5234166}
lng={-122.6830733}
text="Alchemy"
/> */}