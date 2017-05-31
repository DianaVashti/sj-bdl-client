import React, {Component}  from 'react'
import PropTypes from 'prop-types';
import RaisedButton from 'material-ui/RaisedButton';
import ToolBarHeader from './toolBarHeader'
import MobileLandingBtns from './mobileLandingBtns'
import DesktopLanding from './desktopLanding'
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
