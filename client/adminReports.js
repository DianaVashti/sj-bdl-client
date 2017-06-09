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
      reports: []
    }
  }

  // componentDidMount() {
  //   const jwt = sessionStorage.getItem('auth');
  //   console.log('this is from the http get req ', sessionStorage.getItem('auth'))
  //
  //   const config = {
  //     headers: { 'x-auth': jwt }
  //   }
  //
  //   axios.get('http://localhost:8080/api/admins/reports', config)
  //     .then((response) => {
  //       console.log(response)
  //       this.setState({
  //         reports: response.data
  //       })
  //     })
  //     .catch((error) => {
  //       console.log('There was an error ', error)
  //     })
  // }

  render() {
    console.log('this is from the admin reports ', sessionStorage.getItem('auth'))

    return (
      <Paper zDepth={3} rounded={false} >
        <div>
          <ToolBarHeader />
          <ReportsTable reports={this.state.reports} />
          <Footer />
        </div>
      </Paper>
    )
  }

}
