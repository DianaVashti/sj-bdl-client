import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';
import {Link} from 'react-router'
import Paper from 'material-ui/Paper';

/**
 * A modal dialog can only be closed by selecting one of the actions.
 */
export default class AdminLogin extends React.Component {
  state = {
    open: true,
  };

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
        onTouchTap={this.handleClose}
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
              hintText="Username"
              floatingLabelText="Username"
              value="username"
              type="text" /><br />
            <TextField
              hintText="Password Field"
              floatingLabelText="Password"
              value="password"
              type="password" /><br />
          </Dialog>
        </Paper>  
      </div>
    );
  }
}
