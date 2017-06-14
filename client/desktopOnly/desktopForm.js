import React, {Component}  from 'react'
import PropTypes from 'prop-types';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import Subheader from 'material-ui/Subheader';
import {List, ListItem} from 'material-ui/List';
import Checkbox from 'material-ui/Checkbox';
import {orange500, blue500} from 'material-ui/styles/colors';
import RaisedButton from 'material-ui/RaisedButton';
import DatePicker from 'material-ui/DatePicker';
import {Link} from 'react-router'
import IncidentDetails from '../incidentDetails'
import PerpDetails from '../perpDetails'
import SupportDetails from '../supportDetails'

const style = {
  margin: 12,
};

export default class DesktopForm extends Component {
  constructor(props){
    super(props);
  }

  render() {
    return(
      <div>
        <IncidentDetails />
        <PerpDetails />
        <SupportDetails />
        <div>
          <RaisedButton
            style={style}
            label="Home"
            containerElement={<Link to="/" />} />
        </div>
      </div>
    )
  }
}
