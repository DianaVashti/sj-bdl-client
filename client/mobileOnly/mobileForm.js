import React, {Component}  from 'react'
import PropTypes from 'prop-types';
import {Link} from 'react-router'
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import Subheader from 'material-ui/Subheader';
import {List, ListItem} from 'material-ui/List';
import Checkbox from 'material-ui/Checkbox';
import {orange500, blue500} from 'material-ui/styles/colors';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import DatePicker from 'material-ui/DatePicker';
import {
  Step,
  Stepper,
  StepLabel,
} from 'material-ui/Stepper';
import ToolBarHeader from '../toolBarHeader'
import IncidentDetails from '../incidentDetails'
import PerpDetails from '../perpDetails'
import SupportDetails from '../supportDetails'

const style = {
  margin: 12,
};

export default class MobileForm extends Component {
  constructor(props){
    super(props);
    this.state = {
      finished: false,
      stepIndex: 0,
    };
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
        return <IncidentDetails />;
      case 1:
        return <PerpDetails />;
      case 2:
        return <SupportDetails />;
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
      </div>
    )
  }
}
