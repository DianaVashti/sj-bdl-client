import React, {Component}  from 'react'
import PropTypes from 'prop-types';
import Paper from 'material-ui/Paper';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';
import RaisedButton from 'material-ui/RaisedButton';
import IncidentDetails from './incidentDetails'
import PerpDetails from './perpDetails'
import SupportDetails from './supportDetails'

const style = {
  margin: 20,
};

export default class AdminForm extends Component {
  constructor(props){
    super(props);
  }

  render() {
    return(
      <div>
        <Paper style={style} zDepth={5} >
          <div className="admin-form-container">
            <Paper style={style} zDepth={1} >
              <Table>
                <TableHeader
                  adjustForCheckbox={false}
                  displaySelectAll={false}
                  enableSelectAll={false} >
                  <TableRow>
                    <TableHeaderColumn>Field</TableHeaderColumn>
                    <TableHeaderColumn>Data</TableHeaderColumn>
                  </TableRow>
                </TableHeader>
                <TableBody displayRowCheckbox={false}>
                  <TableRow>
                    <TableRowColumn>City</TableRowColumn>
                    <TableRowColumn>Text</TableRowColumn>
                  </TableRow>
                  <TableRow>
                    <TableRowColumn>Where</TableRowColumn>
                    <TableRowColumn>Dropdown Select</TableRowColumn>
                  </TableRow>
                  <TableRow>
                    <TableRowColumn>Location</TableRowColumn>
                    <TableRowColumn>Long Text</TableRowColumn>
                  </TableRow>
                  <TableRow>
                    <TableRowColumn>When</TableRowColumn>
                    <TableRowColumn>Date</TableRowColumn>
                  </TableRow>
                  <TableRow>
                    <TableRowColumn>Gender</TableRowColumn>
                    <TableRowColumn>Text</TableRowColumn>
                  </TableRow>
                  <TableRow>
                    <TableRowColumn>Description</TableRowColumn>
                    <TableRowColumn>LONG Text</TableRowColumn>
                  </TableRow>
                  <TableRow>
                    <TableRowColumn>Perp Name</TableRowColumn>
                    <TableRowColumn>Text</TableRowColumn>
                  </TableRow>
                  <TableRow>
                    <TableRowColumn>Perp #</TableRowColumn>
                    <TableRowColumn>Text</TableRowColumn>
                  </TableRow>
                  <TableRow>
                    <TableRowColumn>Perp E-mail</TableRowColumn>
                    <TableRowColumn>Text</TableRowColumn>
                  </TableRow>
                  <TableRow>
                    <TableRowColumn>Perp Type</TableRowColumn>
                    <TableRowColumn>Dropdown Select</TableRowColumn>
                  </TableRow>
                  <TableRow>
                    <TableRowColumn>Ad?</TableRowColumn>
                    <TableRowColumn>Text or Empty</TableRowColumn>
                  </TableRow>
                </TableBody>
              </Table>
            </Paper>
            <Paper style={style} zDepth={1} >
              <Table>
                <TableHeader
                  adjustForCheckbox={false}
                  displaySelectAll={false}
                  enableSelectAll={false} >
                  <TableRow>
                    <TableHeaderColumn>Field</TableHeaderColumn>
                    <TableHeaderColumn>Data</TableHeaderColumn>
                  </TableRow>
                </TableHeader>
                <TableBody displayRowCheckbox={false}>
                  <TableRow>
                    <TableRowColumn>Perp Gender</TableRowColumn>
                    <TableRowColumn>Text</TableRowColumn>
                  </TableRow>
                  <TableRow>
                    <TableRowColumn>Perp Age</TableRowColumn>
                    <TableRowColumn>Text</TableRowColumn>
                  </TableRow>
                  <TableRow>
                    <TableRowColumn>Perp Ethnicity</TableRowColumn>
                    <TableRowColumn>Dropdown Select</TableRowColumn>
                  </TableRow>
                  <TableRow>
                    <TableRowColumn>Perp Height</TableRowColumn>
                    <TableRowColumn>Text</TableRowColumn>
                  </TableRow>
                  <TableRow>
                    <TableRowColumn>Perp Hair</TableRowColumn>
                    <TableRowColumn>Long Text</TableRowColumn>
                  </TableRow>
                  <TableRow>
                    <TableRowColumn>Attributes</TableRowColumn>
                    <TableRowColumn>Long Text</TableRowColumn>
                  </TableRow>
                  <TableRow>
                    <TableRowColumn>Vehicle</TableRowColumn>
                    <TableRowColumn>Long Text</TableRowColumn>
                  </TableRow>
                  <TableRow>
                    <TableRowColumn>Support Needed?</TableRowColumn>
                    <TableRowColumn>Long Text</TableRowColumn>
                  </TableRow>
                  <TableRow>
                    <TableRowColumn>Preferred Contact Name</TableRowColumn>
                    <TableRowColumn>Long Text</TableRowColumn>
                  </TableRow>
                  <TableRow>
                    <TableRowColumn>Preferred Contact</TableRowColumn>
                    <TableRowColumn>Long Text</TableRowColumn>
                  </TableRow>
                  <TableRow>
                    <TableRowColumn>Say SJI?</TableRowColumn>
                    <TableRowColumn>Long Text</TableRowColumn>
                  </TableRow>
                </TableBody>
              </Table>
            </Paper>
          </div>
          <div>
            <RaisedButton
              style={style}
              label="Submit" />
          </div>
        </Paper>
      </div>
    )
  }
}
