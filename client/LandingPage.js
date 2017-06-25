import React, {Component}  from 'react'
import PropTypes from 'prop-types';
import ToolBarHeader from './toolBarHeader'
import MobileLandingBtns from './mobileOnly/mobileLandingBtns'
import DesktopLanding from './desktopOnly/desktopLanding'
import Footer from './footer'
import WebFont from 'webfontloader'
import {red500, red900, grey300, grey400} from 'material-ui/styles/colors';
// import getMuiTheme from 'material-ui/styles/getMuiTheme';
// import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

WebFont.load({
  google: {
    families: ['Open Sans:300,400,700', 'sans-serif']
  }
});

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
