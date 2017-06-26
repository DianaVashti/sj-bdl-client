import React, {Component}  from 'react'
import {Form, Field} from 'simple-react-form'
import DatePicker from 'simple-react-form-material-ui/lib/date-picker'
import MultipleCheckbox from 'simple-react-form-material-ui/lib/multiple-checkbox'
import Text from 'simple-react-form-material-ui/lib/text'
import Textarea from 'simple-react-form-material-ui/lib/textarea'
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton'
import LocationType from '../Components/locationType'
import WebFont from 'webfontloader'

WebFont.load({
  google: {
    families: ['Open Sans:300,400,700', 'sans-serif']
  }
});

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

  componentWillMount() {
    this.setState(this.props.currentState);
  }

  componentWillUnmount(){
    const viewIndex = 0
    this.props.updateOnDismount(this.state, viewIndex)
    scroll(0,0)
  }

  render() {
    return (
      <div>
        <h1 className="incident">Incident Details</h1>
        <Form state={this.state} onChange={changes => this.setState(changes)}>
          <Field fieldName='city' label='What city did the incident take place?' type={Text}/>
          <Field fieldName='locationType' label='Where did it happen?' type={LocationType}/>
          <Field fieldName='gender' label='Your gender (this helps us organize reports) ' type={Text}/>
          <Field fieldName='assaultType' label='What happened? (select all that apply)' type={MultipleCheckbox} options={this.getAssaultTypeOptions()}/>
          <Field fieldName='date' label='What day did it happen? (can be an estimation)' type={DatePicker}/>
          <Field fieldName='assaultDescription' label='Please describe what happened.' type={Textarea} rows={5} />
        </Form>
        <br/>
      </div>
    )
  }

}
