import React, {Component}  from 'react'
import PropTypes from 'prop-types';
import {Link} from 'react-router'
import axios from 'axios';

import ActionHome from 'material-ui/svg-icons/action/home';
import CommunicationCall from 'material-ui/svg-icons/communication/call';
import Divider from 'material-ui/Divider';
import DropDownMenu from 'material-ui/DropDownMenu';
import {indigo500} from 'material-ui/styles/colors';
import {List, ListItem} from 'material-ui/List';
import MenuItem from 'material-ui/MenuItem';
import Paper from 'material-ui/Paper';
import Popover from 'material-ui/Popover/Popover';
import RaisedButton from 'material-ui/RaisedButton';
import Subheader from 'material-ui/Subheader';
import TextField from 'material-ui/TextField';

import Footer from '../../footer'
import Header from '../../header'

const displayRowStyle = {
  display: 'flex',
  flexDirection: 'column',
}

const iconStyles = {
  marginRight: 24,
};

const styles = {
  pre: {
    overflow: 'hidden', // Fix a scrolling issue on iOS.
  },
};

export default class ResourcesContainer extends Component {
  constructor(props){
    super(props);

    this.state = {
      resources: [],
    };
  }

  fetchResources() {
    axios.get('https://sj-bdl-api.herokuapp.com/api/services')
    .then((res) => {

      this.setState((prevState) => {
        return {
          resources: res.data,
        }
      })
    })
    .catch((error) => {
      console.log('something went wrong ', error);
    })
  }

  componentDidMount(){
    this.fetchResources()
  }

  populateResources() {
    return (
      this.state.resources.map((resource) => (
        <div className="resource-name" key={resource._id}>
          <div className="resource-container">
            <div className="resource-header">
              <TextField
                id="text-field-default"
                defaultValue={resource.name}
                underlineShow={false}
                style={{fontSize: "1.1em", paddingLeft: 15}}/>
              <a href={"tel:"+resource.phone}><ListItem
                rightIcon={<CommunicationCall style={iconStyles} color={indigo500} />}
              /></a>
            </div>
            <Divider />
            <p className="resource-p-text">
              {resource.streetAddress}<br/>
              {resource.city+", "+resource.state+" "+resource.zipCode}<br/>
              {resource.type}
            </p>
          </div>
        </div>
      ))
    )
  }

  render(){
    return(
      <div className="support-container" style={displayRowStyle}>
        {this.populateResources()}
      </div>
    )
  }
}
