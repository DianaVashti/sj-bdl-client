import React, {Component}  from 'react'
import PropTypes from 'prop-types';
import ToolBarHeader from './toolBarHeader'
import MobileLandingBtns from './mobileOnly/mobileLandingBtns'
import DesktopLanding from './desktopOnly/desktopLanding'
import Footer from './footer'

export default class LandingPage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <ToolBarHeader />
        <MobileLandingBtns />
        <DesktopLanding />
        <Footer />
      </div>
    )
  }
}
