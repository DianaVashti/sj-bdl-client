import React, {Component} from 'react'
import PropTypes from 'prop-types';
import {Link} from 'react-router'
import Button from 'react-bootstrap/lib/Button'
import InstallIcon from './installIcon'


const makeButtonStyle = {
  height: '14vh',
  width: '100%',
  borderRadius: 20,
  fontFamily: "Poppins, Open Sans",
  backgroundColor: '#C62828',
  color: '#EEEEEE'
}


const readButtonStyle = {
  height: '14vh',
  width: '100%',
  borderRadius: 20,
  fontFamily: "Poppins, Open Sans",
  backgroundColor: "#EEEEEE"
}

const supportButtonStyle = {
  height: '14vh',
  width: '100%',
  borderRadius: 20,
  fontFamily: "Poppins, Open Sans",
  backgroundColor: "#d8d6d6"
}

const labelStyle = {
  fontSize: 50,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
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
            MAKE
          </Button>
          <Button style={readButtonStyle} href="/view-reports">
            READ
          </Button>
          <Button style={supportButtonStyle} href="/support">
            SUPPORT
          </Button>
        </div>
        <InstallIcon />
      </div>
    )
  }
}
