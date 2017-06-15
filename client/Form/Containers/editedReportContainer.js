import React, {Component}  from 'react'
import {Form, Field} from 'simple-react-form'
import Textarea from 'simple-react-form-material-ui/lib/textarea'

export default class EditedReportContainer extends Component {
  constructor (props) {
    super(props)
    this.state = {}
  }

  render () {
    return (
      <div>
        <Form state={this.state} onChange={changes => this.setState(changes)}>
          <Field fieldName='title' label='Title' type={Textarea} row={2} />
          <Field fieldName='content' label='Perpetrators phone number (if applicable)' type={Textarea} row={7} />
        </Form>
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
