import React, {Component}  from 'react'
import PropTypes from 'prop-types';
import { browserHistory } from 'react-router';
import axios from 'axios';
import {Link} from 'react-router'

import AdminResourceForm from './adminResourceForm'

import ActionHome from 'material-ui/svg-icons/action/home';
import CommunicationCall from 'material-ui/svg-icons/communication/call';
import Divider from 'material-ui/Divider';
import DropDownMenu from 'material-ui/DropDownMenu';
import {indigo500} from 'material-ui/styles/colors';
import {List, ListItem} from 'material-ui/List';
import MenuItem from 'material-ui/MenuItem';
import Popover from 'material-ui/Popover/Popover';
import RaisedButton from 'material-ui/RaisedButton';
import Subheader from 'material-ui/Subheader';
import TextField from 'material-ui/TextField';
import Paper from 'material-ui/Paper';

import Spinner from '../../Spinner/index'

const iconStyles = {
  marginRight: 24,
};

const styles = {
  pre: {
    overflow: 'hidden', // Fix a scrolling issue on iOS.
  },
};

export default class AdminResources extends Component {
  constructor(props){
    super(props);
    this.state = {
      open: false,
      anchorOrigin: {
        horizontal: 'right',
        vertical: 'bottom',
      },
      targetOrigin: {
        horizontal: 'left',
        vertical: 'bottom',
      },
      resources: [],
			isLoading: true
    }
  }

  fetchResources() {
    axios.get('http://localhost:8080/api/services')
    .then((res) => {

      this.setState((prevState) => {
        return {
          resources: res.data,
          isLoading: false
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
            <Paper zDepth={1} style={{backgroundColor: "#FFFFFF", padding: 5}}>
              <div className="resource-header">
                <p className="title-p-text">
                  {resource.name}
                </p>
                <p>add icon here</p>
              </div>
              <Divider />
              <p className="resource-p-text">
                {resource.streetAddress}<br/>
                {resource.city+", "+resource.state+" "+resource.zipCode}<br/>
                {resource.phone}<br/>
                {resource.type}
              </p>
            </Paper>
          </div>
        </div>
      ))
    )
  }

  handleTouchTap = (event) => {
    // This prevents ghost click.
    event.preventDefault();
    this.setState({
      open: true,
      anchorEl: event.currentTarget,
    });
  };

  handleRequestClose = () => {
    this.setState({
      open: false,
    });
  };

  setTarget = (positionElement, position) => {
    const {targetOrigin} = this.state;
    targetOrigin[positionElement] = position;

    this.setState({
      targetOrigin: targetOrigin,
    });
  };

  preventGhostClick = (event) => {
    // This prevents ghost click.
    event.preventDefault();
  }

  logOut() {
    axios.defaults.headers.common['x-auth'] = sessionStorage.getItem('auth')
    axios.delete('http://localhost:8080/api/admins/logout')
      .then(() => {
        browserHistory.push('/')
        sessionStorage.clear()
      })
      .catch((error) => {
        console.log('something went wrong')
      })
  }

  render(){

    if(this.state.isLoading) { return <Spinner /> }

    return(
      <div>
        <h1>Resources:</h1>
        <div className="support-container">
          {this.populateResources()}
        </div>
        <div className="footer-admin-resources">
          <RaisedButton
            label="Add Resource"
            primary={false}
            backgroundColor="#C8C5C5"
            labelColor="#090200"
            onTouchTap={this.handleTouchTap}
            style={{margin: "5"}}
          />
            <Popover
              open={this.state.open}
              anchorEl={this.state.anchorEl}
              anchorOrigin={this.state.anchorOrigin}
              targetOrigin={this.state.targetOrigin}
              onRequestClose={this.handleRequestClose}
              style={{padding: 5, width: "50%", boxShadow: "3px 3px 3px #E0E0E0", border: "1px solid #E0E0E0"}}>
              <AdminResourceForm />
            </Popover>
          <RaisedButton
            label="Log Out"
            primary={false}
            backgroundColor="#E21E26"
            labelColor="#FAFAFA"
            onTouchTap={this.logOut}
            style={{margin: "5"}}
          />
        </div>
      </div>
    )
  }
}
