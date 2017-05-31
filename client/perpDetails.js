import React, {Component}  from 'react'
import PropTypes from 'prop-types';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import Subheader from 'material-ui/Subheader';
import {List, ListItem} from 'material-ui/List';
import Checkbox from 'material-ui/Checkbox';
import {orange500, blue500} from 'material-ui/styles/colors';
import DatePicker from 'material-ui/DatePicker';
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';

const style = {
  marginLeft: 20,
  width: "96%",
};

const styles = {
  block: {
    maxWidth: 250,
  },
  radioButton: {
    marginBottom: 16,
  },
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

export default class PerpDetails extends Component {
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
                floatingLabelText="Perpetrator's name"
                floatingLabelStyle={styles.floatingLabelStyle}
                floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
                fullWidth={true} /><br />
              <br />
              <TextField
                floatingLabelText="Perpetrator's phone number"
                hintText="(if applicable)"
                floatingLabelStyle={styles.floatingLabelStyle}
                floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
                fullWidth={true} /><br />
              <br />
              <TextField
                floatingLabelText="Perpetrator's email"
                hintText="(if applicable)"
                floatingLabelStyle={styles.floatingLabelStyle}
                floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
                fullWidth={true} /><br />
              <br />
              <List>
                <Subheader>Perpetrator was a (choose one):</Subheader>
                <div className="form-container">
                  <div className="form-items-column">
                    <div className="form-items-row">
                      <ListItem
                        leftCheckbox={<Checkbox />}
                        primaryText="predator posing as client"
                      />
                      <ListItem
                        leftCheckbox={<Checkbox />}
                        primaryText="cop"
                      />
                      <ListItem
                        leftCheckbox={<Checkbox />}
                        primaryText="manager/pimp"
                      />
                    </div>
                    <ListItem
                      leftCheckbox={<Checkbox />}
                      primaryText="Other"
                    />
                  </div>
                </div>
              </List>
              <TextField
                floatingLabelText="Did perpetrator contact you through an ad?"
                hintText="(if so, please list advertising website)"
                floatingLabelStyle={styles.floatingLabelStyle}
                floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
                fullWidth={true} /><br />
              <br />
              <TextField
                floatingLabelText="Perpetrator's gender"
                floatingLabelStyle={styles.floatingLabelStyle}
                floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
                fullWidth={true} /><br />
              <br />
              <TextField
                floatingLabelText="Perpetrator's age"
                floatingLabelStyle={styles.floatingLabelStyle}
                floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
                fullWidth={true} /><br />
              <br />
              <RadioButtonGroup
                name="lefty"
                labelPosition="left"
                style={styles.block}
                defaultSelected="White" >
                <RadioButton
                  value="Asian/Pacific Islander"
                  label="Asian/Pacific Islander"
                  style={styles.radioButton} />
                <RadioButton
                  value="Black"
                  label="Black"
                  style={styles.radioButton} />
                <RadioButton
                  value="Hispanic/Latino"
                  label="Hispanic/Latino"
                  style={styles.radioButton} />
                <RadioButton
                  value="Middle Eastern"
                  label="Middle Eastern"
                  style={styles.radioButton} />
                <RadioButton
                  value="White"
                  label="White"
                  style={styles.radioButton} />
                <RadioButton
                  value="Other"
                  label="Other"
                  style={styles.radioButton} />
              </RadioButtonGroup>
              <TextField
                floatingLabelText="Perpetrator height"
                floatingLabelStyle={styles.floatingLabelStyle}
                floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
                fullWidth={true} /><br />
              <br />
              <TextField
                floatingLabelText="Perpetrator hair type/color"
                floatingLabelStyle={styles.floatingLabelStyle}
                floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
                fullWidth={true} /><br />
              <br />
              <TextField
                floatingLabelText="Any obvious physical attributes?"
                hintText="(scars, tattoos, etc)"
                floatingLabelStyle={styles.floatingLabelStyle}
                floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
                fullWidth={true} /><br />
              <br />
              <TextField
                floatingLabelText="Perpetrator vehicle information"
                hintText="(color, make, model)"
                floatingLabelStyle={styles.floatingLabelStyle}
                floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
                fullWidth={true} /><br />
              <br />
            </div>
          </Paper>
        </div>
      </div>
    )
  }
}
