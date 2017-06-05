import React, {Component} from 'react';
import {
  Table,
  TableBody,
  TableFooter,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';
import TextField from 'material-ui/TextField';
import Paper from 'material-ui/Paper';

const styles = {
  propContainer: {
    width: 200,
    overflow: 'hidden',
    margin: '20px auto 0',
  },
  propToggleHeader: {
    margin: '20px auto 10px',
  },
};

const tableData = [
  {
    name: 'John Smith',
    status: 'Edited',
  },
  {
    name: 'Randal White',
    status: 'Unedited',
  },
  {
    name: 'Stephanie Sanders',
    status: 'Edited',
  },
  {
    name: 'Steve Brown',
    status: 'Edited',
  },
  {
    name: 'Joyce Whitten',
    status: 'Edited',
  },
  {
    name: 'Samuel Roberts',
    status: 'Edited',
  },
  {
    name: 'Adam Moore',
    status: 'Edited',
  },
];

/**
 * A more complex example, allowing the table height to be set, and key boolean properties to be toggled.
 */
export default class ReportsTable extends Component {
  state = {
    fixedHeader: true,
    fixedFooter: true,
    stripedRows: true,
    showRowHover: true,
    selectable: true,
    multiSelectable: false,
    enableSelectAll: false,
    deselectOnClickaway: true,
    showCheckboxes: false,
    height: '300px',
  };


  render() {
    return (
      <div>
        <Paper zDepth={3} rounded={false} >
          <Table
            height={this.state.height}
            fixedHeader={this.state.fixedHeader}
            fixedFooter={this.state.fixedFooter}
            selectable={this.state.selectable}
            multiSelectable={this.state.multiSelectable}
          >
            <TableHeader
              displaySelectAll={this.state.showCheckboxes}
              adjustForCheckbox={this.state.showCheckboxes}
              enableSelectAll={this.state.enableSelectAll}
            >
              <TableRow>
                <TableHeaderColumn colSpan="3" tooltip="Super Header" style={{textAlign: 'center'}}>
                  Super Header
                </TableHeaderColumn>
              </TableRow>
              <TableRow>
                <TableHeaderColumn tooltip="The Name">Name</TableHeaderColumn>
                <TableHeaderColumn tooltip="The Status">Status</TableHeaderColumn>
              </TableRow>
            </TableHeader>
            <TableBody
              displayRowCheckbox={this.state.showCheckboxes}
              deselectOnClickaway={this.state.deselectOnClickaway}
              showRowHover={this.state.showRowHover}
              stripedRows={this.state.stripedRows}
            >
              {tableData.map( (row, index) => (
                <TableRow key={index}>
                  <TableRowColumn>{row.name}</TableRowColumn>
                  <TableRowColumn>{row.status}</TableRowColumn>
                </TableRow>
                ))}
            </TableBody>
            <TableFooter
              adjustForCheckbox={this.state.showCheckboxes}
            >
              <TableRow>
              </TableRow>
            </TableFooter>
          </Table>
        </Paper >
      </div>
    );
  }
}
