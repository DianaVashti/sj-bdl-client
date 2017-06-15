import React, {Component}  from 'react'
import PropTypes from 'prop-types';
import {Link} from 'react-router'
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import {
  Step,
  Stepper,
  StepLabel,
} from 'material-ui/Stepper';
import SupportReportContainer from './Containers/SupportReportContainer'
import IncidentReportContainer from './Containers/incidentReportContainer'
import PerpReportContainer from './Containers/perpReportContainer'

const style = {
  margin: 12,
};

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
    }
  }

  handleNext = () => {
    const {stepIndex} = this.state;
    this.setState({
      stepIndex: stepIndex + 1,
      finished: stepIndex >= 2,
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
          updateOnDismount={this.handleIncidentStateUpdate}  />;
      case 1:
        return <PerpReportContainer
          currentState={this.state.perpDetails}
          updateOnDismount={this.handleIncidentStateUpdate}/>;
      case 2:
        return <SupportReportContainer
          currentState={this.state.supportDetails}
          updateOnDismount={this.handleIncidentStateUpdate}/>;
      default:
        return 'Error error errrrorrrrr';
    }
  }

  render(){
    const {finished, stepIndex} = this.state;
    const contentStyle = {margin: '0 16px'};

    return(
      <div>
        <div style={{width: '100%', maxWidth: 700, margin: 'auto'}}>
          <Stepper activeStep={stepIndex}>
            <Step>
              <StepLabel>Incident Details</StepLabel>
            </Step>
            <Step>
              <StepLabel>Perpetrator Details</StepLabel>
            </Step>
            <Step>
              <StepLabel>Submit</StepLabel>
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
                    label={stepIndex === 2 ? 'Finish' : 'Next'}
                    primary={true}
                    onTouchTap={this.handleNext}
                  />
                </div>
              </div>
            )}
          </div>
        </div>
        <div>
          <RaisedButton
            style={style}
            label="Home"
            containerElement={<Link to="/" />} />
        </div>
        <p>
          <b>Current State:</b>
        </p>
        <pre>
          {JSON.stringify(this.state, null, 2)}
        </pre>
      </div>
    )
  }
}
