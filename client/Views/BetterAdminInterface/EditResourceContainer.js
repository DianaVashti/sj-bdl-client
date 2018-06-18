// not finished or hooked up yet.

import React, {Component}  from 'react'
import PropTypes from 'prop-types';
import {Link, browserHistory} from 'react-router'
import axios from 'axios';

import {Form, Field} from 'simple-react-form'
import Text from 'simple-react-form-material-ui/lib/text'

import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';

export default class EditResourcePage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      resource: []
    }
  }

  fetchReportData() {
    axios.get('http://localhost:8080/api/services/'+ this.state.resource[0]._id)
    .then(res => {
      console.log("In fetchReportData: ", res.data);
      this.setState((prevState) => {
        resource: res.data
      })
    })
    .then( _ => console.log(this.state))
  }

  conponentDidMount(){
    this.fetchReportsData()
  }

  render() {
    return(
      <div className="admin-add-resource">
        <h1>Edit a Resource</h1>
        <Form state={this.state} onChange={changes => this.setState(changes)}>
          <Field fieldName='name' label='Name*' type={Text} placeholder={this.state.resource.name}/>
          <Field fieldName='streetAddress' label='Street Address*' type={Text} placeholder={this.state.resource.streetAddress}/>
          <Field fieldName='city' label='City*' type={Text} placeholder={this.state.resource.city}/>
          <Field fieldName='state' label='State*' type={Text} placeholder={this.state.resource.state}/>
          <Field fieldName='zipCode' label='Zip Code*' type={Text} placeholder={this.state.resource.zipCode}/>
          <Field fieldName='phone' label='Phone*' type={Text} placeholder={this.state.resource.phone}/>
          <Field fieldName='type' label='Type*' type={Text} placeholder={this.state.resource.type}/>
        </Form>
        <RaisedButton
          label="Submit"
          primary={false}
          backgroundColor="#C8C5C5"
          onTouchTap={this.handleOnSubmit.bind(this)}
        />
      </div>
    )
  }
}
