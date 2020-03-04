import React, { Component, useState } from 'react'
import { GoogleMap, withScriptjs, withGoogleMap, Marker } from "react-google-maps";
import request from 'superagent';
import { getAllResidencies } from './api';

import * as resListings from "./data.json";

// const resListings = getAllResidencies();
console.log(Number(resListings.default[0].lat))
function Map(){
  return <GoogleMap 
            defaultZoom={4.5} 
            defaultCenter={{lat:37.9283459, lng:-94.5794797}} 
          >
                {/* <Marker 
                key={Math.random()}
                position={{ lat:45.512230, lng:-122.658722
                }}
              /> */}

              {/* map through all the residential listings and map 'em out */}
            {resListings.default.map((res =>

              <Marker 
                key={Math.random()}
                position={{ lat:Number(res.lat), lng:Number(res.long) 
                }}
              />
            ))};
          </GoogleMap>
}

const WrappedMap = withScriptjs(withGoogleMap(Map));

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
