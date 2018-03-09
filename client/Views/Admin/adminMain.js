import React, {Component}  from 'react'
import PropTypes from 'prop-types';
import {Link, browserHistory} from 'react-router'
import axios from 'axios';

import Paper from 'material-ui/Paper';
import Popover from 'material-ui/Popover/Popover';
import RaisedButton from 'material-ui/RaisedButton';

import ReportsTable from './reportsTable'
import Spinner from '../../Spinner/index'

export default class AdminMain extends Component {
  constructor(props) {
    super(props);
    this.state = {
      reports: [],
			isLoading: true
    }

    this.fetchReports = this.fetchReports.bind(this);
  }

  fetchReports() {
    const jwt = sessionStorage.getItem('auth');

    const config = {
      headers: { 'x-auth': jwt }
    }

    axios.get('http://localhost:8080/api/admins/reports', config)
      .then((response) => {
        this.setState({
          reports: response.data,
          isLoading: false
        })
      })
      .catch((error) => {
        console.log('There was an error ', error)
      })
  }

  componentDidMount() {
    this.fetchReports()
  }

  logOut() {
    axios.defaults.headers.common['x-auth'] = sessionStorage.getItem('auth')
    axios.delete('http://localhost:8080/api/admins/logout')
      .then(() => {
        browserHistory.push('/')
        sessionStorage.clear()
      })
      .catch((error) => {
        console.log('something went wrong')
      })
  }

  render() {

    if (this.state.isLoading) { return <Spinner /> }

    return (
      <div>
        <ReportsTable
          reports={this.state.reports}
          fetchReports={this.fetchReports}
        />
        <RaisedButton
          label="Log Out"
          primary={false}
          backgroundColor="#E21E26"
          labelColor="#FAFAFA"
          onTouchTap={this.logOut}
          style={{margin: "5"}}
        />
        <Link to="/admin-resources"><RaisedButton
          label="Edit Resources"
          secondary={true}
          backgroundColor="#E21E26"
          labelColor="#FAFAFA"
          onTouchTap={this.preventGhostClick}
          style={{margin: "5"}}
        /></Link>
      </div>
    )
  }
}
