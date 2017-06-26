import React, {Component}  from 'react'
import PropTypes from 'prop-types';
import Header from '../../header'
import MobileLanding from './mobileLanding'
import DesktopLanding from './desktopLanding'
import Footer from '../../footer'
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
        <Header />
        <div>
          <MobileLanding />
          <DesktopLanding />
        </div>  
        <Footer />
      </div>
    )
  }
}
