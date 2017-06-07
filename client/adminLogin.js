import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';
import {Link} from 'react-router'
import Paper from 'material-ui/Paper';
import axios from 'axios';

/**
 * A modal dialog can only be closed by selecting one of the actions.
 */
export default class AdminLogin extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      open: true,
      email: '',
      password: '',
    };
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleSubmitButtonTap = this.handleSubmitButtonTap.bind(this);
  }

  handleEmailChange(event) {
    this.setState({ email: event.target.value })
  }

  handlePasswordChange(event) {
    this.setState({ password: event.target.value })
  }

  handleSubmitButtonTap() {
    axios.post('http://localhost:8080/api/admins/login', {
      email: this.state.email,
      password: this.state.password
    })
    .then((response) => {
			sessionStorage.setItem('auth', response.headers['x-auth'])
    })
    .catch((error) => {
      console.log('Something went wrong ', error)
    })
  }

  render() {
    const actions = [
      <FlatButton
        label="Cancel"
        primary={true}
        onTouchTap={this.handleClose}
        containerElement={<Link to="/" />}
      />,
      <FlatButton
        label="Submit"
        primary={true}
        disabled={false}
        onTouchTap={this.handleSubmitButtonTap}
        containerElement={<Link to="/admin-reports" />}
      />,
    ];

    return (
      <div>
        <Paper zDepth={3} rounded={false} >
          <Dialog
            title="Dialog With Actions"
            actions={actions}
            modal={true}
            open={this.state.open}
          >
            <TextField
              hintText="Email"
              floatingLabelText="Email"
              value={this.state.email}
              onChange={this.handleEmailChange}
              type="text" /><br />
            <TextField
              hintText="Password Field"
              floatingLabelText="Password"
              value={this.state.password}
              onChange={this.handlePasswordChange}
              type="password" /><br />
          </Dialog>
        </Paper>
      </div>
    );
  }
}
