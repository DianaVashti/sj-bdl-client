import React, {Component}  from 'react'
import {Form, Field} from 'simple-react-form'
import RaisedButton from 'material-ui/RaisedButton';
import Textarea from 'simple-react-form-material-ui/lib/textarea';
import axios from 'axios';
import { browserHistory } from 'react-router';

export default class EditedReportContainer extends Component {
  constructor (props) {
    super(props)
    this.state = {}
    this.postEditedReport = this.postEditedReport.bind(this);
  }

  postEditedReport() {
    axios.defaults.headers.common['x-auth'] = sessionStorage.getItem('auth');
    axios.post(`http://localhost:8080/api/reports/${this.props.report._id}`, this.state)
      .then((res) => {
        this.props.handleClose();
        this.props.fetchReports();
        browserHistory.push('/admin-reports');
      })
      .catch((error) => {
        console.log(error)
      })
  }

  render () {
    return (
      <div>
        <Form state={this.state} onChange={changes => this.setState(changes)}>
          <Field fieldName='title' label='Title' type={Textarea} row={2} />
          <Field fieldName='content' label='Edited Report Content' type={Textarea} row={7} />
        </Form>
        <div>
          <RaisedButton label="Submit" onTouchTap={this.postEditedReport} />
        </div>
        <br/>
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
