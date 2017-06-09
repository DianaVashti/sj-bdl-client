import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';
import { Link, browserHistory } from 'react-router'
import Paper from 'material-ui/Paper';
import axios from 'axios';

/**
 * A modal dialog can only be closed by selecting one of the actions.
 */
export default class AdminLogin extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      open: true
    };
    this.handleSubmitButtonTap = this.handleSubmitButtonTap.bind(this);
  }

  handleSubmitButtonTap() {
    axios.post('http://localhost:8080/api/admins/login', {
      email: this.refs.email.getValue(),
      password: this.refs.password.getValue()
    })
    .then((response) => {
			sessionStorage.setItem('auth', response.headers['x-auth']);
      browserHistory.push('/admin-reports')
    })
    .catch((error) => {
      console.log('Something went wrong ', error)
      browserHistory.push('/admin-login')
      // Post some popup saying that login failed
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
              ref='email'
              type="text" /><br />
            <TextField
              hintText="Password Field"
              floatingLabelText="Password"
              ref='password'
              type="password" /><br />
          </Dialog>
        </Paper>
      </div>
    );
  }
}
