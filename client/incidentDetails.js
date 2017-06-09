import React, { Component }  from 'react'
import PropTypes from 'prop-types';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import Subheader from 'material-ui/Subheader';
import { List, ListItem } from 'material-ui/List';
import Checkbox from 'material-ui/Checkbox';
import { orange500, blue500 } from 'material-ui/styles/colors';
import DatePicker from 'material-ui/DatePicker';

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
};

export default class IncidentDetails extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div>
        <div className="incident-container">
          <Paper zDepth={2}>
            <div className="desktop-form-container" >
              <TextField
                floatingLabelText="What city did the incident take place?"
                floatingLabelStyle={styles.floatingLabelStyle}
                floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
                fullWidth={true} /><br />
              <br />
              <List>
                <Subheader>Where did it happen?</Subheader>
                <div className="form-container">
                  <div className="form-items-row">
                    <div className="form-items-column">
                      <ListItem
                        leftCheckbox={<Checkbox />}
                        primaryText="Parlor"
                      />
                      <ListItem
                        leftCheckbox={<Checkbox />}
                        primaryText="Hotel/Motel"
                      />
                      <ListItem
                        leftCheckbox={<Checkbox />}
                        primaryText="Client's House"
                      />
                    </div>
                    <div className="form-items-column">
                      <ListItem
                        leftCheckbox={<Checkbox />}
                        primaryText="Worker's House"
                      />
                      <ListItem
                        leftCheckbox={<Checkbox />}
                        primaryText="Street"
                      />
                      <ListItem
                        leftCheckbox={<Checkbox />}
                        primaryText="Club"
                      />
                    </div>
                  </div>
                  <ListItem
                    leftCheckbox={<Checkbox />}
                    primaryText="Other"
                  />
                </div>
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
