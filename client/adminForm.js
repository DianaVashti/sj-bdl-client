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
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import IncidentDetails from './incidentDetails'
import PerpDetails from './perpDetails'
import SupportDetails from './supportDetails'
import EditedReportForm from './editedReportForm'

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
          <div className="admin-ui-container">
            <div className="admin-form-left">
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
                      <p className="admin-form-item">Long Text</p>
                    </TableRow>
                    <TableRow>
                      <TableRowColumn>Where</TableRowColumn>
                      <p className="admin-form-item">Dropdown Select</p>
                    </TableRow>
                    <TableRow>
                      <TableRowColumn>When</TableRowColumn>
                      <p className="admin-form-item">Date</p>
                    </TableRow>
                    <TableRow>
                      <TableRowColumn>Gender</TableRowColumn>
                      <p className="admin-form-item">Text</p>
                    </TableRow>
                    <TableRow>
                      <TableRowColumn>Perp Name</TableRowColumn>
                      <p className="admin-form-item">Text</p>
                    </TableRow>
                    <TableRow>
                      <TableRowColumn>Perp #</TableRowColumn>
                      <p className="admin-form-item">Text</p>
                    </TableRow>
                    <TableRow>
                      <TableRowColumn>Perp E-mail</TableRowColumn>
                      <p className="admin-form-item">Text</p>
                    </TableRow>
                    <TableRow>
                      <TableRowColumn>Perp Type</TableRowColumn>
                      <p className="admin-form-item">Dropdown Select</p>
                    </TableRow>
                    <TableRow>
                      <TableRowColumn>Ad?</TableRowColumn>
                      <p className="admin-form-item">Long Text or empty</p>
                    </TableRow>
                    <TableRow>
                      <TableRowColumn>Perp Gender</TableRowColumn>
                      <p className="admin-form-item">Text</p>
                    </TableRow>
                    <TableRow>
                      <TableRowColumn>Perp Age</TableRowColumn>
                      <p className="admin-form-item">Text</p>
                    </TableRow>
                    <TableRow>
                      <TableRowColumn>Perp Ethnicity</TableRowColumn>
                      <p className="admin-form-item">Dropdown Select</p>
                    </TableRow>
                    <TableRow>
                      <TableRowColumn>Perp Height</TableRowColumn>
                      <p className="admin-form-item">Text</p>
                    </TableRow>
                    <TableRow>
                      <TableRowColumn>Perp Hair</TableRowColumn>
                      <p className="admin-form-item">Long Text</p>
                    </TableRow>
                    <TableRow>
                      <TableRowColumn>Say SJI?</TableRowColumn>
                      <p className="admin-form-item">text</p>
                    </TableRow>
                  </TableBody>
                </Table>
              </Paper>
            </div>
            <div className="admin-form-right">
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
                      <TableRowColumn>Location</TableRowColumn>
                      <p className="admin-form-item">Long Text</p>
                    </TableRow>
                    <TableRow>
                      <TableRowColumn>Perp Hair</TableRowColumn>
                      <p className="admin-form-item">Long Text</p>
                    </TableRow>
                    <TableRow>
                      <TableRowColumn>Perp Attributes</TableRowColumn>
                      <p className="admin-form-item">Long Text</p>
                    </TableRow>
                    <TableRow>
                      <TableRowColumn>Perp Vehicle</TableRowColumn>
                      <p className="admin-form-item">Long Text</p>
                    </TableRow>
                    <TableRow>
                      <TableRowColumn>Support needed?</TableRowColumn>
                      <p className="admin-form-item">Long Text</p>
                    </TableRow>
                    <TableRow>
                      <TableRowColumn>Preferred name</TableRowColumn>
                      <p className="admin-form-item">Long Text</p>
                    </TableRow>
                    <TableRow>
                      <TableRowColumn>contact means?</TableRowColumn>
                      <p className="admin-form-item">Long Text</p>
                    </TableRow>
                    <TableRow>
                      <TableRowColumn>Description</TableRowColumn>
                      <p className="admin-form-item">Long Text</p>
                    </TableRow>
                  </TableBody>
                </Table>
              </Paper>
              <Paper style={style} zDepth={1} >
                <div>
                  <EditedReportForm />
                </div>  
              </Paper>
            </div>
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
