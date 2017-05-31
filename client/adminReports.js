import React, {Component}  from 'react'
import PropTypes from 'prop-types';
import ToolBarHeader from './toolBarHeader'
import Footer from './footer'
import ReportsTable from './reportsTable'
import Paper from 'material-ui/Paper';

export default class AdminReports extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Paper zDepth={3} rounded={false} >
        <div>
          <ToolBarHeader />
          <ReportsTable />
          <Footer />
        </div>
      </Paper>
    )
  }

}
