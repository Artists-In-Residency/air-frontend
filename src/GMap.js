import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
// import DetailTest from 'DetailTest.js';

const DetailTest = ({ text }) => <div><img alt="thing" src = "http://www.placekitten.com/50/50"/>{text}</div>;

class SimpleMap extends Component {
  static defaultProps = {
    center: {
      lat: 45.52,
      lng: -122.68
    },
    zoom: 12
  };

  render() {
    // console.log(process.env.GOOGLE_MAPS_API_KEY);
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '66vh', width: '66%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: `${process.env.REACT_APP_GOOGLE_MAPS_API}` }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <DetailTest
              lat={45.5234166}
              lng={-122.6830733}
              text="Alchemy"
          />
  
        </GoogleMapReact>
      </div>

      
    );
  }
}
export default SimpleMap;

// maybe for the map / on api load
// const handleApiLoaded = (map, maps) => {
//   // use map and maps objects
// };
 
 
// <GoogleMapReact
//   bootstrapURLKeys={{ key: /* YOUR KEY HERE */ }}
//   defaultCenter={this.props.center}
//   defaultZoom={this.props.zoom}
//   yesIWantToUseGoogleMapApiInternals
//   onGoogleApiLoaded={({ map, maps }) => handleApiLoaded(map, maps)}
// >
//   <AnyReactComponent
//     lat={59.955413}
//     lng={30.337844}
//     text="My Marker"
//   />
// </GoogleMapReact>