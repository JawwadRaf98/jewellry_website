import  { Component } from 'react';
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';

class MapContainer extends Component {
 
  render() {
  return (
    <>
    <section className='googleMap'>
   <Map
   google = {this.props.google}
   style = {{width:"100%", height: "100%" } }
   zoom = {100}
   initialCenter = {{
     lat: 24.86828,
     lng: 67.08175,
   }
  
   }
   />
   </section>
   </>
  );

}
}
export default  GoogleApiWrapper({
  apiKey:"AIzaSyBIKx7XA0BHHwZR1xtLJSF2X72SgN7YfCQ"
})(MapContainer);