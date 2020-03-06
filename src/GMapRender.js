import React from 'react'
import { GoogleMap, withScriptjs, withGoogleMap, Marker, InfoWindow } from "react-google-maps";
import GMapStyle from './GMapStyle.js'
import './GMapRender.css';

export default class Map extends React.Component{
 
    state = {
        selected: null,
        imageStatus: '',
        error: false,
        resListings: [],
        placeholderImg: ['../assets/bg1.jpg', '../assets/bg2.jpg', '../assets/bg3.jpg', '../assets/bg4.jpg'] 
    }

    getRandomPlaceholder = () => {
      const index = Math.floor(Math.random() * this.state.placeholderImg.length);
      const placeholder = this.state.placeholderImg[index];
      return placeholder;
    }

    capitalize = (str) => {
        if (typeof str !== 'string') return ''
        return str.charAt(0).toUpperCase() + str.slice(1)
    }

    handleImageLoaded() {
      this.setState({ imageStatus: "", error: false });
    }

    handleImageError() {
      this.setState({ imageStatus: "", error: true });
    }

    async componentDidMount() {
      console.log('>>>>>>>>>MOUNTING<<<<<<<<<')
    }

    setSelected = (selected) =>{
        this.setState({selected})
    }

    render(){
      console.log(this.props.resCenter);
  
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
                    let source;
                    if (this.state.error || !this.state.selected.img_url) {
                        source = this.getRandomPlaceholder();
                    } else {
                        source = this.state.selected.img_url;
                    }
                    this.setState({randomImage : source}) 
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
                    <p className="infoImage"><img src={this.state.randomImage} onLoad={this.handleImageLoaded.bind(this)} onError={this.handleImageError.bind(this)} alt='pic'/>
                                {this.state.imageStatus}</p>
                  
                    <h4><a href={`/listings/${this.state.selected.id}`}>{this.state.selected.program_name}</a></h4>
                    <p className="infoDescription">{this.capitalize(this.state.selected.description)}</p>
                  
                    <div>
                    <p className="infoCity">{this.state.selected.address}<br></br>
                        {this.state.selected.city}{this.state.selected.state &&<> {this.state.selected.state}</>} {this.state.selected.zip_code &&<> {this.state.selected.zip_code}</>}{this.state.selected.country &&<> - {this.state.selected.country}</>} - <a href={this.state.selected.link_url} target="_blank" rel="noopener noreferrer">Website</a></p>
                  </div>
                  
                </div>
                </InfoWindow>
        
               )}
            </GoogleMap>
    }
    
  }
  export const WrappedMap = withScriptjs(withGoogleMap(Map));