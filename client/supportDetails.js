import React, {Component}  from 'react'
import PropTypes from 'prop-types';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import Subheader from 'material-ui/Subheader';
import {List, ListItem} from 'material-ui/List';
import Checkbox from 'material-ui/Checkbox';
import {orange500, blue500} from 'material-ui/styles/colors';
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

export default class SupportDetails extends Component {
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
                floatingLabelText="Do you need support? If yes, what kind of support do you need?"
                floatingLabelStyle={styles.floatingLabelStyle}
                floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
                multiLine={true}
                rows={5}
                fullWidth={true} /> <br />
              <br />
              <TextField
                floatingLabelText="If yes, what name should we call you?"
                floatingLabelStyle={styles.floatingLabelStyle}
                floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
                fullWidth={true} /><br />
              <br />
              <TextField
                floatingLabelText="If yes, what is the best way to contact you?"
                floatingLabelStyle={styles.floatingLabelStyle}
                floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
                multiLine={true}
                rows={5}
                fullWidth={true} /> <br />
              <br />
              <TextField
                floatingLabelText="If yes, can we say we are calling from St. James Infirmary? If no, where would you like us to say we are calling from?"
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
