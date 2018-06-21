import React, { Component } from 'react';

import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';

import AdminFormContainer from './AdminFormContainer';

const style = {
  width: '35vw',
};

export default class ReportTable extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fixedHeader: true,
      fixedFooter: true,
      stripedRows: true,
      multiSelectable: false,
      enableSelectAll: false,
      showCheckboxes: false,
      open: false,
    };
  }

  handleOpen = () => {
    this.setState({ open: true });
  }

  handleClose = () => {
    this.setState({ open: false });
  }

  populateTable() {
    return (
      this.props.reports.map((report) => (
        <TableRow key={report._id}>
          <TableRowColumn>{report.perpetrator.name}</TableRowColumn>
          <TableRowColumn>{report.edited.toString()}</TableRowColumn>
          <TableRowColumn style={style}>{report.date.toString().substr(0, 10)}</TableRowColumn>
          <TableRowColumn>
            <AdminFormContainer report={report} fetchReports={this.props.fetchReports} />
          </TableRowColumn>
        </TableRow>
      ))
    );
  }

  render() {
    return (
      <div>
        <Table
          height={this.state.height}
          fixedHeader={this.state.fixedHeader}
          fixedFooter={this.state.fixedFooter}
        >
          <TableHeader
            displaySelectAll={this.state.showCheckboxes}
            adjustForCheckbox={this.state.showCheckboxes}
            enableSelectAll={this.state.enableSelectAll}
          >
            <TableRow>
              <TableHeaderColumn tooltip="">Name</TableHeaderColumn>
              <TableHeaderColumn tooltip="">Published</TableHeaderColumn>
              <TableHeaderColumn tooltip="" style={style}>Date</TableHeaderColumn>
              <TableHeaderColumn tooltip="">✎</TableHeaderColumn>
            </TableRow>
          </TableHeader>
          <TableBody
            displayRowCheckbox={this.state.showCheckboxes}
            showRowHover={this.state.showRowHover}
            stripedRows={this.state.stripedRows}
          >
            {this.populateTable()}
          </TableBody>
        </Table>
      </div>
    );
  }
}
