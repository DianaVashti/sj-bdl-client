import React, { Component }  from 'react'
import PropTypes from 'prop-types';
import { browserHistory } from 'react-router';
import { Link } from 'react-router'
import axios from 'axios';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import Paper from 'material-ui/Paper';
import { Step, Stepper, StepLabel } from 'material-ui/Stepper';

import Footer from '../../footer'
import GeolocationReportContainer from './geolocationReportContainer'
import IncidentReportContainer from './incidentReportContainer'
import PerpReportContainer from './perpReportContainer';
import SupportReportContainer from './supportReportContainer'

export default class ReportForm extends Component {
  constructor(props){
    super(props);
    this.state = {
      finished: false,
      stepIndex: 0,
      incidentDetails: {
        city: "",
        locationType: "",
        gender: "",
        assaultType: [],
        date: {},
        assaultDescription: ""
      },
      geolocationDetails: {
        type: 'Point',
        coordinates: []
      },
      perpDetails: {
        name: "",
        phone: "",
        email: "",
        perpType: "",
        adServiceUsed: "",
        gender: "",
        age: "",
        race: "",
        height: "",
        hair: "",
        attributes: "",
        vehicle: ""
      },
      supportDetails: {
        needSupport: "",
        name: "",
        contact: "",
        callingFrom: ""
      },
    };

    this.handleSubmitOnFinishBtnTap = this.handleSubmitOnFinishBtnTap.bind(this);
  }

  handleIncidentStateUpdate = (data, viewIndex) => {
    if (viewIndex === 0){
      this.setState({
        incidentDetails: data
      })
    } else if (viewIndex === 1){
      this.setState({
        perpDetails: data
      })
    } else if (viewIndex === 2){
      this.setState({
        supportDetails: data
      })
    } else if (viewIndex === 3){
      this.setState({
        geolocationDetails: data
      })
    }
  }

  handleNext = () => {
    const {stepIndex} = this.state;
    this.setState({
      stepIndex: stepIndex + 1,
      finished: stepIndex >= 3,
    });
  };

  handlePrev = () => {
    const {stepIndex} = this.state;
    if (stepIndex > 0) {
      this.setState({stepIndex: stepIndex - 1});
    }
  };

  getStepContent(stepIndex) {
    switch (stepIndex) {
      case 0:
        return <IncidentReportContainer
          currentState={this.state.incidentDetails}
          updateOnDismount={this.handleIncidentStateUpdate}/>;
      case 1:
        return <PerpReportContainer
          currentState={this.state.perpDetails}
          updateOnDismount={this.handleIncidentStateUpdate}/>;
      case 2:
        return <SupportReportContainer
          currentState={this.state.supportDetails}
          updateOnDismount={this.handleIncidentStateUpdate}/>;
      case 3:
        return <GeolocationReportContainer
          currentState={this.state.geolocationDetails}
          updateOnDismount={this.handleIncidentStateUpdate}/>;
      default:
        return 'Error error errrrorrrrr';
    }
  }

  handleSubmitOnFinishBtnTap() {
    this.handleNext
    const { incidentDetails, perpDetails, supportDetails, geolocationDetails } = this.state;
    axios.post('http://localhost:8080/api/reports/new', {
      city: incidentDetails.city,
      locationType: incidentDetails.locationType,
      gender: incidentDetails.gender,
      date: incidentDetails.date,
      assaultType: incidentDetails.assaultType,
      assaultDescription: incidentDetails.assaultDescription,
      geolocation : geolocationDetails,
      perpetrator: perpDetails,
      support: supportDetails
    })
    .then((res) => {
      // show a success message to user
      console.log('Success', res)
      browserHistory.push('/view-reports')
    })
    .catch((error) => {
      // show error message to user
      console.log('something went wrong ', error)
    })
  }

  render(){
    const {finished, stepIndex} = this.state;
    const contentStyle = {margin: '0 16px'};

    return(
      <div className="incident">
        <div style={{width: '100%', maxWidth: 700, margin: 'auto'}}>
          <Paper zDepth={1} >
              <Stepper activeStep={stepIndex}>
                <Step>
                  <StepLabel></StepLabel>
                </Step>
                <Step>
                  <StepLabel></StepLabel>
                </Step>
                <Step>
                  <StepLabel></StepLabel>
                </Step>
                <Step>
                  <StepLabel></StepLabel>
                </Step>
              </Stepper>
            <div style={contentStyle}>
              {finished ? (
                <div>
                  <a
                    href="/"
                  >
                    Click here
                  </a> to return to the home page.
                </div>
              ) : (
                <div>
                  <div>{this.getStepContent(stepIndex)}</div>
                  <div style={{marginTop: 12}}>
                    <FlatButton
                      label="Back"
                      disabled={stepIndex === 0}
                      onTouchTap={this.handlePrev}
                      style={{marginRight: 12}}
                    />
                    <RaisedButton
                      label={stepIndex === 3 ? 'Finish' : 'Next'}
                      primary={true}
                      onTouchTap={stepIndex === 3 ? this.handleSubmitOnFinishBtnTap : this.handleNext}
                    />
                  </div>
                </div>
              )}
            </div>
          </Paper>  
        </div>
      </div>
    )
  }
}
