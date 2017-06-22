import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Paper from 'material-ui/Paper';

const pStyle={font: '11px "Open Sans"'}

export default class Footer extends Component {

  render() {
    return (
      <div className="footer">
        <Paper zDepth={3} className="footer">
          <a href="/admin-login" style={pStyle}>Admin Login</a>
          <p style={pStyle}>SF Bad Date List 2017</p>
        </Paper>
      </div>
    )
  }
}
