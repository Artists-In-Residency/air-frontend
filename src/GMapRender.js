import React from 'react'
import { GoogleMap, withScriptjs, withGoogleMap, Marker, InfoWindow } from "react-google-maps";
import GMapStyle from './GMapStyle.js'
import './GMapRender.css';

export default class Map extends React.Component{
 
    state = {
        selected: null,
        resListings: []
    }
    async componentDidMount() {
      console.log('>>>>>>>>>MOUNTING<<<<<<<<<')
  }
    setSelected = (selected) =>{
        this.setState({selected})
    }

    render(){
      console.log(this.props.resCenter)
    
        return <GoogleMap 
              defaultZoom={4.5} 
              defaultCenter={{
                  lat:37.9283459, 
                  lng:-94.5794797
                }}
                // center={{
                //   lat:this.props.resCenter.lat, 
                //   lng:this.props.resCenter.lng
                // }}
              defaultOptions={{styles: GMapStyle}} 
            >
              {this.props.resListings.map((res =>
  
                <Marker 
                  key={Math.random()}
                  position={{ lat:Number(res.lat), lng:Number(res.long) 
                  }}
                  onClick={() => {
                    this.setSelected(res);
                  }}
                  icon={{
                    url: "./artpinz.png",
                    scaledSize: new window.google.maps.Size(33, 45)
                  }}
                />
              ))}
              {this.state.selected && (
                 <InfoWindow
                    position={{ lat:Number(this.state.selected.lat), lng:Number(this.state.selected.long) }} 
                    onCloseClick={() => {this.setSelected(null);}}
                  >
                <div className="infoWindow" >
                  <a href={`/listings/${this.state.selected.id}`}>
                    <h4>{this.state.selected.program_name}</h4>
                  </a>
                    <p className="infoDescription">{this.state.selected.description}</p>
                  <a href={this.state.selected.link_url} target="_blank" rel="noopener noreferrer">
                    <h4>Website</h4>
                  </a>
                  
                </div>
                </InfoWindow>
        
               )}
            </GoogleMap>
    }
    
  }
  export const WrappedMap = withScriptjs(withGoogleMap(Map));