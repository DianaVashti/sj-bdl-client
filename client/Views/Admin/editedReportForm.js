import React, {Component}  from 'react'
import PropTypes from 'prop-types';
import { browserHistory } from 'react-router';
import axios from 'axios';

import {Form, Field} from 'simple-react-form'
import RaisedButton from 'material-ui/RaisedButton';
import Textarea from 'simple-react-form-material-ui/lib/textarea';

export default class EditedReportForm extends Component {
  constructor (props) {
    super(props)
    this.state = {}
    this.postEditedReport = this.postEditedReport.bind(this);
  }

  postEditedReport() {
    axios.defaults.headers.common['x-auth'] = sessionStorage.getItem('auth');
    axios.post(`https://sj-bdl-api.herokuapp.com/api/reports/${this.props.report._id}`, this.state)
      .then((res) => {
        this.props.fetchReports();
        browserHistory.push('/admin-reports');
      })
      .catch((error) => {
        console.log(error)
      })
  }

  componentWillUnmount() {
    this.postEditedReport()
  }

  render () {
    return (
      <div>
        <Form state={this.state} onChange={changes => this.setState(changes)}>
          <Field fieldName='title' label='Title*' type={Textarea} row={2} />
          <Field fieldName='content' label='Edited Report Content*' type={Textarea} row={7} />
        </Form>
        <br/>
      </div>
    )
  }
}
