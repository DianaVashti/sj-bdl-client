import React, {Component}  from 'react'
import PropTypes from 'prop-types';
import {Link} from 'react-router'
import RaisedButton from 'material-ui/RaisedButton';
import Paper from 'material-ui/Paper';
import {red, grey} as Colors from 'material-ui/styles/colors';

const labelStyle = {
  font: '2.7em "Open Sans"',
}

const buttonStyle = {
  height: '6vh',
  font: '2.7em "Open Sans"',
}

export default class MobileLandingBtns extends Component {
  constructor(props) {
    super(props);
  }
//notes: href prop on raised buttons is a redirect, not going to be like
//react-router single page view
  render() {
    return (
      <Paper zDepth={3} rounded={false} className="mobile-landing-container">
        <div className="landing-page-main-btn-container">
          <RaisedButton
            className="landing-page-main-btn"
            label="Report a Bad Date"
            primary={true}
            labelStyle={labelStyle}
            buttonStyle={buttonStyle}
            href="/submit-report" />
          <RaisedButton
            className="landing-page-main-btn"
            label="Read Reports"
            backgroundColor="#9E8F82"
            labelStyle={labelStyle}
            buttonStyle={buttonStyle}
            href="/view-reports" />
          <RaisedButton
            className="landing-page-main-btn"
            label="Get Support / Resources"
            secondary={true}
            labelStyle={labelStyle}
            buttonStyle={buttonStyle}
            href="/support" />
        </div>
      </Paper>
    )
  }
}
