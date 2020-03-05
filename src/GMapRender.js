import React from 'react'
import { GoogleMap, withScriptjs, withGoogleMap, Marker, InfoWindow } from "react-google-maps";
import request from 'superagent'
import { getAllResidencies } from './api.js'
import GMapStyle from './GMapStyle.js'

export default class Map extends React.Component{
 
    state = {
        selected: null,
        resListings: []
    }

    setSelected = (selected) =>{
        this.setState({selected})
    }

    async componentDidMount(){
        const allListings = await getAllResidencies();
        this.setState({resListings: allListings})
        console.log(this.state.resListings)
    }

    // const [selected, setSelected] = useState(null);
    render(){
    
        return <GoogleMap 
              defaultZoom={4.5} 
              defaultCenter={{lat:37.9283459, lng:-94.5794797}}
              defaultOptions={{styles: GMapStyle}} 
            >
                  {/* <Marker 
                  key={Math.random()}
                  position={{ lat:45.512230, lng:-122.658722
                  }}
                /> */}
  
                {/* map through all the residential listings and map 'em out lol  */}
              {this.state.resListings.map((res =>
  
                <Marker 
                  key={Math.random()}
                  position={{ lat:Number(res.lat), lng:Number(res.long) 
                  }}
                  onClick={() => {
                    this.setSelected(res);
                  }}
                  icon={{
                    url: "./artpinz.png",
                    scaledSize: new window.google.maps.Size(33, 44)
                  }}
                />
              ))}
  
              {this.state.selected && (
                 <InfoWindow
                    position={{ lat:Number(this.state.selected.lat), lng:Number(this.state.selected.long) }} 
                    onCloseClick={() => {this.setSelected(null);}}
                  >
                <div style={{background: 'red', height: '100px', width: '100px'}}>
                  <a href={this.state.selected.link_url}>
                    <h4>{this.state.selected.program_name}</h4>
                  </a>
                    <p>{this.state.selected.description}</p>
                </div>
                </InfoWindow>
        
               )}
            </GoogleMap>
    }
    
  }
  export const WrappedMap = withScriptjs(withGoogleMap(Map));