import React, {Component}  from 'react'
import PropTypes from 'prop-types';
import axios from 'axios';
import ToolBarHeader from './toolBarHeader'
import Footer from './footer'
import ReportsTable from './reportsTable'
import Paper from 'material-ui/Paper';

export default class AdminReports extends Component {
  constructor(props) {
    super(props);
    this.state = {
      reports: [],
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
        console.log(response)
        this.setState({
          reports: response.data
        })
      })
      .catch((error) => {
        console.log('There was an error ', error)
      })
  }

  componentDidMount() {
    this.fetchReports()
  }

  render() {

    return (
      <Paper zDepth={3} rounded={false} >
        <div>
          <ToolBarHeader />
          <ReportsTable reports={this.state.reports} fetchReports={this.fetchReports} />
          <Footer />
        </div>
      </Paper>
    )
  }

}
