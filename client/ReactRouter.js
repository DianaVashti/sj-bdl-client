import React, { Component } from 'react';
import { Router, Route, browserHistory } from 'react-router';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import LandingPage from './Views/Home/landingPage';
import ViewReportsLanding from './Views/Read/viewReportsLanding';
import AdminLogin from './Views/BetterAdminInterface/AdminLogin';
import FileReportLanding from './Views/Make/fileReportLanding';
import ResourcesLanding from './Views/Support/resourcesLanding';
import BetterAdminInterface from './Views/BetterAdminInterface/AdminInterface';

export default class ReactRouter extends Component {
  requireAuth(nextState, replace) {
    const isLoggedIn = sessionStorage.getItem('auth');
    if (isLoggedIn === null || isLoggedIn === undefined) {
      replace({
        pathname: '/admin-login'
      });
    }
  }

  render() {
    const landingPageComponent = (props, state, params) =>
      <LandingPage />;

    const viewReportsComponent = (props, state, params) =>
      <ViewReportsLanding />;

    const adminLoginComponent = (props, state, params) =>
      <AdminLogin />;

    const fileReportComponent = (props, state, params) =>
      <FileReportLanding />;

    const resourcesComponent = (props, state, params) =>
      <ResourcesLanding />;

    const betterAdminInterface = (props, state, params) =>
      <BetterAdminInterface />;

    return (
      <MuiThemeProvider >
        <Router history={browserHistory}>
          <Route path="/" component={landingPageComponent} />
          <Route path="/view-reports" component={viewReportsComponent} />
          <Route path="/admin-login" component={adminLoginComponent} />
          <Route path="/admin-reports" component={betterAdminInterface} onEnter={this.requireAuth} />
          <Route path="/submit-report" component={fileReportComponent} />
          <Route path="/support" component={resourcesComponent} />
        </Router>
      </MuiThemeProvider>
    );
  }
}
