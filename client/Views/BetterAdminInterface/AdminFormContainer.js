import React, { Component } from 'react';

import { browserHistory } from 'react-router';
import axios from 'axios';

import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import { Form, Field } from 'simple-react-form';
import Textarea from 'simple-react-form-material-ui/lib/textarea';


const styles = {
  textStyle: {
    fontSize: '.7em'
  },
  customWidth: {
    width: 150,
  },
  modalStyle: {
    width: '100%',
    maxWidth: 'none',
    height: '100%',
    maxHeight: 'none'
  }
};

export default class AdminFormContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      title: '',
      content: '',
      published: '',
      value: ''
    };

    this.postEditedReport = this.postEditedReport.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleOpen = this.handleOpen.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }



  handleOpen = () => {
    const jwt = sessionStorage.getItem('auth');

    const config = {
      headers: { 'x-auth': jwt }
    };
    // fetch title content
    axios.get(`https://st-james-bdl-api.herokuapp.com/api/reports/${this.props.report._id}`, config)
    .then(data => {
      if (data.data.editedReport.title.length !== 0) {
        if (data.data.edited === true) {
          this.setState({ value: 2 });
        } else {
          this.setState({ value: 1 });
        }

        this.setState({
          open: true,
          title: data.data.editedReport.title,
          content: data.data.editedReport.content,
          // this is how we will toggle published
          published: data.data.edited,
        });
      } else {
        this.setState({ open: true, value: 1 });
      }
    });
  }

  handleClose = () => {
    this.setState({ open: false });
  }

  handleChange = (event, index, value) => {
    this.setState({
      value
    });

    if (value === 1) {
      this.setState({ published: false });
    } else if (value === 2) {
      this.setState({ published: true });
    }
  };

  postEditedReport() {
    const editedReport = {
      reportData: {
        title: this.state.title,
        content: this.state.content,
      },
      edited: this.state.published
    };

    axios.defaults.headers.common['x-auth'] = sessionStorage.getItem('auth');
    axios.post(`https://st-james-bdl-api.herokuapp.com/api/reports/${this.props.report._id}`, editedReport)
      .then(() => {
        this.setState({ open: false });
        this.props.fetchReports();
        browserHistory.push('/admin-reports');
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    const { report } = this.props;
    let { perpetrator, support } = this.props.report;
    if (support === undefined) {
      support = {}
    }

    // add functionality to be able to run a verification on change
    const actions = [
      <FlatButton
        label='Cancel'
        backgroundColor='#E21E26'
        labelStyle={{ color: '#FAFAFA' }}
        style={{ margin: 5 }}
        onTouchTap={this.handleClose}
      />,
      <FlatButton
        label="Submit"
        backgroundColor="#C8C5C5"
        style={{ margin: 5 }}
        onTouchTap={this.postEditedReport}
      />
    ]
    // below is the dialog box with the current version of the form to publish

    return(
      <div >
        <RaisedButton label="Edit" primary onTouchTap={this.handleOpen} />
        <Dialog
          actions={actions}
          modal={true}
          contentStyle={styles.modalStyle}
          open={this.state.open}
          autoScrollBodyContent={true}
        >
          <div className="admin-ui-container">
            <div className="admin-form-left">
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
                    <TableRowColumn style={ styles.textStyle }>City</TableRowColumn>
                    <p className="admin-form-item">{report.city}</p>
                  </TableRow>
                  <TableRow>
                    <TableRowColumn style={ styles.textStyle}>Where</TableRowColumn>
                    <p className="admin-form-item">{report.locationType}</p>
                  </TableRow>
                  <TableRow>
                    <TableRowColumn style={ styles.textStyle }>When</TableRowColumn>
                    <p className="admin-form-item">{report.date}</p>
                  </TableRow>
                  <TableRow>
                    <TableRowColumn style={ styles.textStyle }>Gender</TableRowColumn>
                    <p className="admin-form-item">{report.gender}</p>
                  </TableRow>
                  <TableRow>
                    <TableRowColumn style={ styles.textStyle }>Perp Name</TableRowColumn>
                    <p className="admin-form-item">{perpetrator.name}</p>
                  </TableRow>
                  <TableRow>
                    <TableRowColumn style={ styles.textStyle }>Perp #</TableRowColumn>
                    <p className="admin-form-item">{perpetrator.phone}</p>
                  </TableRow>
                  <TableRow>
                    <TableRowColumn style={styles.textStyle}>Perp E-mail</TableRowColumn>
                    <p className="admin-form-item">{perpetrator.email}</p>
                  </TableRow>
                  <TableRow>
                    <TableRowColumn style={styles.textStyle}>Perp Type</TableRowColumn>
                    <p className="admin-form-item">{perpetrator.perpType}</p>
                  </TableRow>
                  <TableRow>
                    <TableRowColumn style={styles.textStyle}>Ad?</TableRowColumn>
                    <p className="admin-form-item">{perpetrator.adServiceUsed ? perpetrator.adServiceUsed : ''}</p>
                  </TableRow>
                  <TableRow>
                    <TableRowColumn style={styles.textStyle}>Perp Gender</TableRowColumn>
                    <p className="admin-form-item">{perpetrator.gender}</p>
                  </TableRow>
                  <TableRow>
                    <TableRowColumn style={ styles.textStyle }>Perp Age</TableRowColumn>
                    <p className="admin-form-item">{perpetrator.age}</p>
                  </TableRow>
                  <TableRow>
                    <TableRowColumn style={ styles.textStyle }>Perp Ethnicity</TableRowColumn>
                    <p className="admin-form-item">{perpetrator.race}</p>
                  </TableRow>
                  <TableRow>
                    <TableRowColumn style={ styles.textStyle }>Perp Height</TableRowColumn>
                    <p className="admin-form-item">{perpetrator.height}</p>
                  </TableRow>
                  <TableRow>
                    <TableRowColumn style={ styles.textStyle }>Perp Hair</TableRowColumn>
                    <p className="admin-form-item">{perpetrator.hair}</p>
                  </TableRow>
                  <TableRow>
                    <TableRowColumn style={ styles.textStyle }>Perp Attributes</TableRowColumn>
                    <p className="admin-form-item">{perpetrator.attributes}</p>
                  </TableRow>
                  <TableRow>
                    <TableRowColumn style={ styles.textStyle }>Perp Vehicle</TableRowColumn>
                    <p className="admin-form-item">{perpetrator.vehicle ? perpetrator.vehicle : ''}</p>
                  </TableRow>
                  <TableRow>
                    <TableRowColumn style={ styles.textStyle }>Description</TableRowColumn>
                    <p className="admin-form-item">{report.assaultDescription}</p>
                  </TableRow>
                  <TableRow>
                    <TableRowColumn style={ styles.textStyle }>Assault Type</TableRowColumn>
                    <p className="admin-form-item">{report.assaultType.join()}</p>
                  </TableRow>
                  <TableRow>
                    <TableRowColumn>Support needed?</TableRowColumn>
                    <p className="admin-form-item">{support.needSupport ? support.needSupport : ''}</p>
                  </TableRow>
                  <TableRow>
                    <TableRowColumn>Preferred name?</TableRowColumn>
                    <p className="admin-form-item">{support.name ? support.name : ''}</p>
                  </TableRow>
                  <TableRow>
                    <TableRowColumn>Contact means?</TableRowColumn>
                    <p className="admin-form-item">{support.contact ? support.contact : ''}</p>
                  </TableRow>
                  <TableRow>
                    <TableRowColumn>Say SJI?</TableRowColumn>
                    <p className="admin-form-item">{support.callingFrom ? support.callingFrom : ''}</p>
                  </TableRow>
                </TableBody>
              </Table>
            </div>
            <div className='admin-form-right' >
              <Form state={this.state.formContent} onChange={changes => this.setState(changes)}>
                <Field style={{ fontSize: 12 }} fieldName='title' label='Title*' type={Textarea} row={2} value={this.state.title} />
                <Field style={{ fontSize: 12 }} fieldName='content' label='Edited Report Content*' type={Textarea} row={7} value={this.state.content}/>
              </Form>
              <div>
                <SelectField
                  floatingLabelText="Frequency"
                  value={this.state.value}
                  onChange={this.handleChange}
                >
                  <MenuItem value={1} primaryText="Not Published" />
                  <MenuItem value={2} primaryText="Published" />
                </SelectField>
              </div>
            </div>
          </div>
        </Dialog>
      </div>
    );
  }
}
