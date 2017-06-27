import React, {Component}  from 'react'
import {Gmaps, Marker, InfoWindow, Circle} from '../../../react-gmaps'

const coords = {
  lat: 37.7847,
  lng: -122.4145
};

const params = {v: '3.exp', key: 'AIzaSyBUBMWbJJ3r0zbGRNou0KpfLT3KatbgvVg'}

export default class GeolocationReportContainer extends Component {
  constructor(props){
    super(props);
    this.state = {
      coordinates: []
    }
    this.onDragEnd = this.onDragEnd.bind(this)
  }

  onMapCreated(map) {
    map.setOptions({
      disableDefaultUI: false
    });
  }

  onDragEnd(e) {
    const viewIndex = 3
    let coordinates = this.state.coordinates.slice()
    coordinates = [e.latLng.lng(), e.latLng.lat()]
    this.setState({ coordinates: coordinates })
    this.props.updateOnDismount(this.state, viewIndex)
  }

  render(){
    return(
      <div>
        <h3>Please drag the pin to the approximate location where the incident occured</h3>
        <h5>You can zoom in to add a more specific location</h5>
        <Gmaps
          height={'500px'}
          lat={coords.lat}
          lng={coords.lng}
          zoom={12}
          loadingMessage={'Map Loading'}
          params={params}
          onMapCreated={this.onMapCreated}>
          <Marker
            lat={coords.lat}
            lng={coords.lng}
            draggable={true}
            onDragEnd={this.onDragEnd} />
        </Gmaps>
      </div>
    )
  }
}
