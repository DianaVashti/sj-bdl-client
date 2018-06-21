import React, { Component } from 'react';
import axios from 'axios';
import ReportTable from './ReportTable';
import Spinner from '../../Spinner';

const styles = {
  viewStyle: {
    display: 'flex',
    flex: 1,
    boxShadow: '0px 1px 8px 0.8px grey',
  },
};

class AdminReportsDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      reports: [],
			isLoading: true
    };

    this.fetchReports = this.fetchReports.bind(this);
  }

  componentDidMount() {
    this.fetchReports();
  }

  fetchReports() {
    const jwt = sessionStorage.getItem('auth');

    const config = {
      headers: { 'x-auth': jwt }
    };

    axios.get('http://localhost:8080/api/admins/reports', config)
      .then((response) => {
        this.setState({
          reports: response.data,
          isLoading: false
        });
      })
      .catch((error) => {
        console.log('There was an error ', error);
      });
  }

  render() {
    if (this.state.isLoading) { return <Spinner />; }

    return (
      <div style={styles.viewStyle}>
        <ReportTable reports={this.state.reports} fetchReports={this.fetchReports} />
      </div>
    );
  }
}

export default AdminReportsDetail;
