import React, {Component}  from 'react'
import PropTypes from 'prop-types';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import Subheader from 'material-ui/Subheader';
import {List, ListItem} from 'material-ui/List';
import Checkbox from 'material-ui/Checkbox';
import {orange500, blue500} from 'material-ui/styles/colors';
import DatePicker from 'material-ui/DatePicker';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';

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
  customWidth: {
    width: 200,
  },
};

export default class PerpDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 1
    };
  }

  handleChange = (event, index, value) => this.setState({value});

  render() {
    return(
      <div>
        <div className="incident-container">
          <Paper zDepth={2}>
            <div className="form-container" >
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
              <Subheader>Perp Type</Subheader>
              <DropDownMenu
                value={this.state.value}
                onChange={this.handleChange}
                style={styles.customWidth}
                autoWidth={false} >
                <MenuItem value={1} primaryText="predator posing as client" />
                <MenuItem value={2} primaryText="cop" />
                <MenuItem value={3} primaryText="manager/pimp" />
                <MenuItem value={4} primaryText="Other" />
              </DropDownMenu>
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
              <Subheader>Perp Ethnicity</Subheader>
              <DropDownMenu
                value={this.state.value}
                onChange={this.handleChange}
                style={styles.customWidth}
                autoWidth={false} >
                <MenuItem value={1} primaryText="Asian/Pacific Islander" />
                <MenuItem value={2} primaryText="Black" />
                <MenuItem value={3} primaryText="Hispanic/Latino" />
                <MenuItem value={4} primaryText="Middle Eastern" />
                <MenuItem value={5} primaryText="White" />
                <MenuItem value={6} primaryText="Other" />
              </DropDownMenu>
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
