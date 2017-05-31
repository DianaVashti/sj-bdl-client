import React, {Component}  from 'react'
import PropTypes from 'prop-types';
import ToolBarHeader from './toolBarHeader'
import Footer from './footer'
import ReportsTable from './reportsTable'

export default class AdminReports extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <ToolBarHeader />
        <ReportsTable />
        <Footer />
      </div>
    )
  }

}
