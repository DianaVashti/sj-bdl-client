import React, {Component}  from 'react'
import PropTypes from 'prop-types';
import {Link} from 'react-router'
import RaisedButton from 'material-ui/RaisedButton';
import Paper from 'material-ui/Paper';

const labelStyle = {
  font: '2.7em "Open Sans"',
}

const buttonStyle = {
  height: '6vh',
}

export default class MobileLandingBtns extends Component {
  constructor(props) {
    super(props);
  }
//notes: href prop on raised buttons is a redirect, not going to be like
//react-router single page view
  render() {
    return (
      <Paper zDepth={3} rounded={false} >
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
            backgroundColor="#a4c639"
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
