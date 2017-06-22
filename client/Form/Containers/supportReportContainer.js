import React, {Component}  from 'react'
import {Form, Field} from 'simple-react-form'
import Text from 'simple-react-form-material-ui/lib/text'
import Textarea from 'simple-react-form-material-ui/lib/textarea'

export default class SupportReportContainer extends Component {
  constructor (props) {
    super(props)
    this.state = {
      needSupport: "",
      name: "",
      contact: "",
      callingFrom: ""
    }
  }

  componentWillMount() {
    this.setState(this.props.currentState);
  }

  componentWillUnmount(){
    const viewIndex = 2
    this.props.updateOnDismount(this.state, viewIndex)
  }

  render () {
    return (
      <div>
        <h1>Perpetrator Details</h1>
        <Form state={this.state} onChange={changes => this.setState(changes)}>
          <Field fieldName='needSupport' label='Do you need support? If yes, what kind of support do you need.' type={Textarea} rows={5} />
          <Field fieldName='name' label='If yes, what name should we call you?' type={Text}/>
          <Field fieldName='contact' label='If yes, what is the best way to contact you?' type={Textarea} rows={3} />
          <Field fieldName='callingFrom' label='If yes, can we say we are calling from St. James Infirmary? If no, where would you like us to say we are calling from?' type={Textarea} rows={3} />
        </Form>
        <br/>
      </div>
    )
  }

}
