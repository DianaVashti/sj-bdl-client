import React, {Component} from 'react';
import PropTypes from 'prop-types';

const pStyle={font: '11px "Open Sans"'}

export default class Footer extends Component {

  render() {
    return (
      <div className="footer">
        <a href="/admin-login" style={pStyle}>Admin Login</a>
        <p style={pStyle}>SF Bad Date List &copy;2017</p>
      </div>
    )
  }
}
