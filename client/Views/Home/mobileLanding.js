import React, {Component} from 'react'
import PropTypes from 'prop-types';
import {Link} from 'react-router'
import RaisedButton from 'material-ui/RaisedButton';

const buttonStyle = {
  height: '14vh',
  width: '80%',
  borderRadius: '10px',
  fontFamily: "Georgia, serif"
}

const labelStyle = {
  fontSize: '2.2em'
}

export default class MobileLanding extends Component {
  constructor(props) {
      super(props);
  }
  //notes: href prop on raised buttons is a redirect, not going to be like
  //react-router single page view
  render() {
    return (
      <div className="landing-page-main-btn-container">
        <div className="button-container">
          <RaisedButton className="landing-page-main-btn"
            label = "REPORT"
            backgroundColor = "#C62828"
            fullWidth={true}
            style={ buttonStyle }
            // labelStyle={labelStyle}
            href="/submit-report" />
          <RaisedButton className="landing-page-main-btn"
            label = "READ"
            backgroundColor = "#EEEEEE"
            fullWidth={true}
            style = { buttonStyle  }
            // labelStyle={labelStyle}
            href = "/view-reports" />
          <RaisedButton className="landing-page-main-btn"
            label = "RESOURCES"
            backgroundColor = "#9E9E9E"
            fullWidth={true}
            style = { buttonStyle }
            // labelStyle={labelStyle}
            href = "/support" />
        </div>
      </div>
    )
  }
}
