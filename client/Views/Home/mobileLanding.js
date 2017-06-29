import React, {Component} from 'react'
import PropTypes from 'prop-types';
import {Link} from 'react-router'
import Button from 'react-bootstrap/lib/Button'
// import FlatButton from 'material-ui/RaisedButton';

const makeButtonStyle = {
  height: '14vh',
  width: '100%',
  borderRadius: 20,
  fontFamily: "Avenir, serif",
  backgroundColor: '#C62828',
}

const readButtonStyle = {
  height: '14vh',
  width: '100%',
  borderRadius: 20,
  fontFamily: "Avenir, serif",
  backgroundColor: "#EEEEEE"
}

const supportButtonStyle = {
  height: '14vh',
  width: '100%',
  borderRadius: 20,
  fontFamily: "Avenir, serif",
  backgroundColor: "#9E9E9E"
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
          <Button style={makeButtonStyle} href="/submit-report">
            <div className='button-text'>MAKE</div>
          </Button>
          <Button style={readButtonStyle} href="/view-reports">
            <div className='button-text'>READ</div>
          </Button>
          <Button style={supportButtonStyle} href="/support">
            <div className='button-text'>SUPPORT</div>
          </Button>
        </div>
      </div>
    )
  }
}

{/* <FlatButton
  label="MAKE"
  backgroundColor="#C62828"
  fullWidth={true}
  buttonStyle={buttonStyle}
  labelStyle={labelStyle}
  href="/submit-report" />
<FlatButton
  label="READ"
  backgroundColor="#EEEEEE"
  fullWidth={true}
  buttonStyle = {buttonStyle}
  // labelStyle={labelStyle}
  href = "/view-reports" />
<FlatButton
  label="SUPPORT"
  backgroundColor="#9E9E9E"
  fullWidth={true}
  buttonStyle={buttonStyle}
  // labelStyle={labelStyle}
  href = "/support" /> */}
