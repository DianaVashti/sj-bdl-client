import React, { Component }  from 'react'
import PropTypes from 'prop-types';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import Subheader from 'material-ui/Subheader';
import { List, ListItem } from 'material-ui/List';
import Checkbox from 'material-ui/Checkbox';
import { orange500, blue500 } from 'material-ui/styles/colors';
import DatePicker from 'material-ui/DatePicker';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';

const style = {
  marginLeft: 20,
  width: "96%",
};

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  floatingLabelStyle: {
    color: orange500,
    width: "96%",
  },
  floatingLabelFocusStyle: {
    color: blue500,
  },
  textFieldWidth: {
    width: "96%",
  },
  customWidth: {
    width: 200,
  },
};

export default class IncidentDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {value: 1};
  }

  handleChange = (event, index, value) => this.setState({value});

  render() {
    return(
      <div>
        <div className="incident-container">
          <Paper zDepth={2}>
            <div className="form-container" >
              <TextField
                floatingLabelText="What city did the incident take place?"
                floatingLabelStyle={styles.floatingLabelStyle}
                floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
                fullWidth={true} /><br />
              <br />
              <List>
                <Subheader>Where did it happen?</Subheader>
                <DropDownMenu
                  value={this.state.value}
                  onChange={this.handleChange}
                  style={styles.customWidth}
                  autoWidth={false}
                  labelStyle={styles.floatingLabelStyle} >
                  <MenuItem value={1} primaryText="Parlor" />
                  <MenuItem value={2} primaryText="Hotel/Motel" />
                  <MenuItem value={3} primaryText="Client's House" />
                  <MenuItem value={4} primaryText="Worker's House" />
                  <MenuItem value={5} primaryText="Street" />
                  <MenuItem value={6} primaryText="Club" />
                  <MenuItem value={6} primaryText="Other" />
                </DropDownMenu>
              </List>
              <TextField
                floatingLabelText="In what area did the incident take place?"
                hintText="Name of streets, name of hotel, general area etc"
                floatingLabelStyle={styles.floatingLabelStyle}
                floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
                fullWidth={true} /><br />
              <br />
              <div>
                <DatePicker
                  hintText="When did the incident take place (can be estimate)"
                  mode="landscape"
                  fullWidth={true} />
              </div>
              <TextField
                floatingLabelText="Your gender"
                hintText="this helps us organize reports"
                floatingLabelStyle={styles.floatingLabelStyle}
                floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
                fullWidth={true} /><br />
              <br />
              <TextField
                floatingLabelText="Please describe what happened."
                floatingLabelStyle={styles.floatingLabelStyle}
                floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
                multiLine={true}
                rows={5}
                fullWidth={true} /><br />
              <br />
            </div>
          </Paper>
        </div>
      </div>
    )
  }
}
