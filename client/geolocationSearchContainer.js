import React, {Component}  from 'react'
import PropTypes from 'prop-types';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';

export default class GeolocationSearchContainer extends Component {
  constructor(props){
    super(props);
    this.state = {}
  }

  render(){
    return(
      <div>
        <p>I am a geolocation map!🌇  </p>
        <RaisedButton
          label="Submit(inactive)"
          primary={true} />
      </div>
    )
  }
}
