import ReactDom from 'react-dom'
import {Component} from 'react'
import React from 'react'
import PropTypes from 'prop-types';
import { Router, Route, browserHistory } from 'react-router'
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import LandingPage from './landingPage'
import ViewReports from './viewReports'
import AdminReports from './adminReports'
import AdminLogin from './adminLogin'

export default class ReactRouter extends Component {
  constructor(props) {
    super(props)
  }

  render() {

    const landingPageComponent = (props, state, params) =>
      <LandingPage />

    const viewReportsComponent = (props, state, params) =>
      <ViewReports />

    const adminReportsComponent = (props, state, params) =>
      <AdminReports />

    const adminLoginComponent = (props, state,params) =>
      <AdminLogin />

    return (
      <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
        <Router history={browserHistory}>
          <Route path="/" component={landingPageComponent} />
          <Route path="/view-reports" component={viewReportsComponent} />
          <Route path="/admin-login" component={adminLoginComponent} />
          <Route path="/admin-reports" component={adminReportsComponent} />
        </Router>
      </MuiThemeProvider>
    )
  }
}
