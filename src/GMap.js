import React, { Component } from 'react'
import { WrappedMap } from './GMapRender.js';

export default class GMap extends Component {

  render() {
    return (
      <div style={{ width: '100vw', height: '70vh' }} >
        <WrappedMap 
          googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${
          process.env.REACT_APP_GOOGLE_MAPS_API}`}
          loadingElement={<div style={{ height: "100%" }} />}
          containerElement={<div style={{ height: "100%" }} />}
          mapElement={<div style={{ height: "100%" }} />}
        />
      </div>
    )
  }
}