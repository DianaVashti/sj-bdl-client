import ReactDom from 'react-dom'
import {Component} from 'react'
import React from 'react'
import PropTypes from 'prop-types';
import { Router, Route, browserHistory } from 'react-router';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import LandingPage from './landingPage'
import ViewReports from './viewReports'
import AdminReports from './adminReports'
import AdminLogin from './adminLogin'
import FileReport from './fileReport'
import ResourcesContainer from './resourcesContainer'

export default class ReactRouter extends Component {
  constructor(props) {
    super(props)
  }

  requireAuth(nextState, replace) {
    let isLoggedIn = sessionStorage.getItem('auth');
    if (isLoggedIn === null || isLoggedIn === undefined) {
      replace({
        pathname: '/admin-login'
      })
    }
  }

  render() {

    const landingPageComponent = (props, state, params) =>
      <LandingPage />

    const viewReportsComponent = (props, state, params) =>
      <ViewReports />

    const adminReportsComponent = (props, state, params) =>
      <AdminReports />

    const adminLoginComponent = (props, state, params) =>
      <AdminLogin />

    const fileReportComponent = (props, state, params) =>
      <FileReport />

    const dummy = (props, state, params) =>
      <ResourcesContainer />

    return (
      <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
        <Router history={browserHistory}>
          <Route path="/" component={landingPageComponent} />
          <Route path="/view-reports" component={viewReportsComponent} />
          <Route path="/admin-login" component={adminLoginComponent} />
          <Route path="/admin-reports" component={adminReportsComponent} onEnter={this.requireAuth} />
          <Route path="/submit-report" component={fileReportComponent} />
          <Route path='/dummy' component={dummy} />
        </Router>
      </MuiThemeProvider>
    )
  }
}
