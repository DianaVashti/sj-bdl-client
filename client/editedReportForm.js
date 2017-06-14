import React, { Component }  from 'react'
import PropTypes from 'prop-types';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import { orange500, blue500 } from 'material-ui/styles/colors';

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

export default class EditedReportForm extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div>
        <div className="incident-container">
          <div className="desktop-form-container" >
            <TextField
              floatingLabelText="Post Title"
              floatingLabelStyle={styles.floatingLabelStyle}
              floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
              multiLine={true}
              rows={2}
              fullWidth={true} /><br />
            <br />
            <TextField
              floatingLabelText="Bad Date List Report Entry"
              floatingLabelStyle={styles.floatingLabelStyle}
              floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
              multiLine={true}
              rows={10}
              fullWidth={true} /><br />
            <br />
          </div>
        </div>
      </div>
    )
  }
}
