import React, {Component}  from 'react'
import PropTypes from 'prop-types'
// import WebFont from 'webfontloader'
import {Form, Field} from 'simple-react-form'
import DatePicker from 'simple-react-form-material-ui/lib/date-picker'
import FlatButton from 'material-ui/FlatButton';
import MultipleCheckbox from 'simple-react-form-material-ui/lib/multiple-checkbox'
import RaisedButton from 'material-ui/RaisedButton'
import Text from 'simple-react-form-material-ui/lib/text'
import Textarea from 'simple-react-form-material-ui/lib/textarea'
import LocationTypeCustomFormComponent from './locationTypeCustomFormComponent'

// WebFont.load({
//   google: {
//     families: ['Open Sans:300,400,700', 'sans-serif']
//   }
// });

export default class IncidentReportContainer extends Component {

  constructor (props) {
    super(props)
    this.state = {
      city: "",
      locationType: "",
      gender: "",
      assaultType: [],
      date: {},
      assaultDescription: ""
    }
  }

  getAssaultTypeOptions() {
    return [
      {label: 'Physical Assault', value: 'Physical Assault'},
      {label: 'Sexual Assault', value: 'Sexual Assault'},
      {label: 'Robbery', value: 'Robbery'},
      {label: 'Time Waster/Flake', value: 'Time Waster/Flake'},
      {label: 'Took Condom Off', value: 'Took Condom Off'},
      {label: 'Verbal Assault', value: 'Verbal Assault'},
      {label: 'Harassment/ Stalking', value: 'Harassment/ Stalking'},
      {label: 'Client drunk/high', value: 'Client drunk/high'},
      {label: 'Other', value: 'Other'}
    ]
  }

  validateIncident(){
    const {city, locationType, gender, assaultDescription} = this.state
    console.log("IN INCIDENT COMP",city);
    if(city.length === 0 || locationType.length === 0 || gender.length === 0 || assaultDescription.length === 0){
      console.log("I'm chill");
    } else {
      console.log("Nah bro");
    }
  }

  componentWillMount() {
    this.setState(this.props.currentState);
  }

  componentWillUnmount(){
    this.validateIncident()
    const viewIndex = 0
    this.props.updateOnDismount(this.state, viewIndex)
    scroll(0,0)
  }


  render() {
    const {errors, message} = this.props
    const {city, locationType, gender, date, assaultDescription} = this.state
    return (
      <div>
        <h1 className="incident">Incident Details</h1>
        <Form state={this.state} onChange={changes => this.setState(changes)}>
          <Field
            fieldName='city'
            label='What city did the incident take place?*'
            type={Text}
            errorText={errors && (city === "") ? message : ""}
            errorStyle={{color: 'red'}}/>
          <Field
            fieldName='locationType'
            label='Where did it happen?*'
            type={LocationTypeCustomFormComponent}
            errorText={errors && (locationType === "") ? message : ""}
            errorStyle={{color: 'red'}}/>
          <Field
            fieldName='gender'
            label='Your gender (this helps us organize reports)*'
            type={Text}
            errorText={errors && (gender === "") ? message : ""}
            errorStyle={{color: 'red'}}/>
          <Field
            fieldName='assaultType'
            label='What happened? (select all that apply)'
            type={MultipleCheckbox}
            options={this.getAssaultTypeOptions()}/>
          <Field
            fieldName='date'
            label='What day did it happen? (can be an estimation)*'
            type={DatePicker}
            // errorText={errors && (date.valueOf.length === 0) ? message : ""}
            errorStyle={{color: 'red'}}/>
          <Field
            fieldName='assaultDescription'
            label='Please describe what happened.*'
            type={Textarea} rows={5}
            errorText={errors && (assaultDescription === "") ? message : ""}
            errorStyle={{color: 'red'}} />
        </Form>
        <br/>
        <pre>
          {JSON.stringify(this.state, null, 2)}
        </pre>
      </div>
    )
  }

}
