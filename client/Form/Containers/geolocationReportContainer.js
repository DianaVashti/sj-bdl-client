import React, {Component}  from 'react'

export default class GeolocationReportContainer extends Component {
  constructor(props){
    super(props);
    this.state = {}
  }

  render(){
    return(
      <div>
        <h1>Please drop a pin where the incident occured</h1>
        <h4>This does not have to be exact</h4>
      </div>
    )
  }
}
