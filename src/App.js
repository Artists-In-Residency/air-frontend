import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
// import DetailTest from 'DetailTest.js';

const DetailTest = ({ text }) => <div>{text}</div>;

class SimpleMap extends Component {
  static defaultProps = {
    center: {
      lat: 45.52,
      lng: -122.68
    },
    zoom: 12
  };

  render() {
    console.log(process.env.GOOGLE_MAPS_API_KEY);
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '66vh', width: '66%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: `${process.env.GOOGLE_MAPS_API_KEY}` }}
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