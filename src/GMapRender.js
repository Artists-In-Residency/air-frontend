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
              defaultZoom={4} 
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
                    <p className="infoImage"><img src={this.state.selected.img_url} alt ="resImg"/></p>
                    <p className="infoDescription">{this.state.selected.description}</p>
                    <div>
                    <p className="infoCity">{this.state.selected.address}<br></br>
                        {this.state.selected.city}{this.state.selected.state &&<> {this.state.selected.state}</>} {this.state.selected.zip_code &&<> {this.state.selected.zip_code}</>}{this.state.selected.country &&<> - {this.state.selected.country}</>} </p>
                  <a href={this.state.selected.link_url} target="_blank" rel="noopener noreferrer">Website</a>
                  </div>
                  
                </div>
                </InfoWindow>
        
               )}
            </GoogleMap>
    }
    
  }
  export const WrappedMap = withScriptjs(withGoogleMap(Map));