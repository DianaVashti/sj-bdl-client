import React, {Component}  from 'react'
import PropTypes from 'prop-types';
import ToolBarHeader from './toolBarHeader'
import MobileLandingBtns from './mobileOnly/mobileLandingBtns'
import DesktopLanding from './desktopOnly/desktopLanding'
import Footer from './footer'
import Paper from 'material-ui/Paper';

export default class LandingPage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Paper zDepth={3} rounded={false} >
        <div>
          <ToolBarHeader />
          <MobileLandingBtns />
          <DesktopLanding />
          <Footer />
        </div>
      </Paper>
    )
  }
}
