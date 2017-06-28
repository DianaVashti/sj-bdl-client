import React, {Component}  from 'react'
import {Form, Field} from 'simple-react-form'
import Radio from 'simple-react-form-material-ui/lib/radio'
import Text from 'simple-react-form-material-ui/lib/text'
import Textarea from 'simple-react-form-material-ui/lib/textarea'

export default class PerpReportContainer extends Component {

  constructor (props) {
    super(props)
    this.state = {
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
    }
  }

  getPerpTypeOptions() {
    return [
      {label: 'predator posing as client', value: 'predator posing as client'},
      {label: 'cop', value: 'cop'},
      {label: 'manager/pimp', value: 'manager/pimp'},
      {label: 'other', value: 'other'}
    ]
  }

  getRaceTypeOptions() {
    return [
      {label: 'Asian/Pacific Islander', value: 'Asian/Pacific Islander'},
      {label: 'Black', value: 'Black'},
      {label: 'Hispanic/Latino', value: 'Hispanic/Latino'},
      {label: 'Middle Eastern', value: 'Middle Eastern'},
      {label: 'White', value: 'White'},
      {label: 'Other', value: 'Other'}
    ]
  }

  componentWillMount() {
    this.setState(this.props.currentState);
  }

  componentWillUnmount(){
    const viewIndex = 1
    this.props.updateOnDismount(this.state, viewIndex)
    scroll(0,0)
  }

  render () {
    const {errors, message} = this.props
    const {name, perpType, gender, age, race, height, hair} = this.state
    return (
      <div>
        <h1>Perpetrator Details</h1>
        <Form state={this.state} onChange={changes => this.setState(changes)}>
          <Field
            fieldName='name'
            label='Perpetrators name*'
            type={Text}
            errorText={errors && (name === "") ? message : ""}
            errorStyle={{color: 'red'}}/>
          <Field
            fieldName='phone'
            label='Perpetrators phone number (if applicable)'
            type={Text}/>
          <Field
            fieldName='email'
            label='Perpetrators email (if applicable)'
            type={Text}/>
          <Field
            fieldName='perpType'
            label='Perpetrator was a (choose one)*:'
            type={Radio} options={this.getPerpTypeOptions()}
            errorText={errors && (perpType === "") ? message : ""}
            errorStyle={{color: 'red'}}/>
          <Field
            fieldName='adServiceUsed'
            label='Did perpetrator contact you through an ad? (if so, please list advertising website)'
            type={Text}/>
          <Field
            fieldName='gender'
            label='Perpetrators gender*'
            type={Text}
            errorText={errors && (gender === "") ? message : ""}
            errorStyle={{color: 'red'}}/>
          <Field
            fieldName='age'
            label='Perpetrators age*'
            type={Text}
            errorText={errors && (age === "") ? message : ""}
            errorStyle={{color: 'red'}}/>
          <Field
            fieldName='race'
            label='Perpetrators race/ethnicity*'
            type={Radio}
            options={this.getRaceTypeOptions()}
            errorText={errors && (race === "") ? message : ""}
            errorStyle={{color: 'red'}}/>
          <Field
            fieldName='height'
            label='Perpetrator height*'
            type={Text}
            errorText={errors && (height === "") ? message : ""}
            errorStyle={{color: 'red'}}/>
          <Field
            fieldName='hair'
            label='Perpetrator hair type/color*'
            type={Text}
            errorText={errors && (hair === "") ? message : ""}
            errorStyle={{color: 'red'}}/>
          <Field
            fieldName='attributes'
            label='Any obvious physical attributes? (scars, tattoos, etc)'
            type={Textarea}
            rows={2}/>
          <Field
            fieldName='vehicle'
            label='Perpetrator vehicle information (color, make, model)'
            type={Text}/>
        </Form>
        <br/>
        <pre>
          {JSON.stringify(this.state, null, 2)}
        </pre>
      </div>
    )
  }
}
