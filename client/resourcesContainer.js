import React, {Component}  from 'react'
import PropTypes from 'prop-types';
import {Link} from 'react-router'
import axios from 'axios';
import {List, ListItem} from 'material-ui/List';
import CommunicationCall from 'material-ui/svg-icons/communication/call';
import ActionHome from 'material-ui/svg-icons/action/home';
import {indigo500} from 'material-ui/styles/colors';
import RaisedButton from 'material-ui/RaisedButton';
import ToolBarHeader from './toolBarHeader'

const displayRowStyle = {
  display: 'flex',
  flexDirection: 'column',
}

const margin = {
  marginTop: 5,
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
    axios.get('http://localhost:8080/api/services')
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
        <List className="resource-item" key={resource._id} style={margin} >
          <div className="resource-name">
            <ListItem
              primaryText={resource.name}
            />
          </div>
          <div className="svg-icons">
            <a href="tel:{resource.phone}"><ListItem
              rightIcon={<CommunicationCall style={iconStyles} color={indigo500} />}
            /></a>
            <ListItem
              rightIcon={<ActionHome style={iconStyles} />} />
          </div>
        </List>
      ))
    )
  }

  render(){
    return(
      <div>
        <ToolBarHeader />
        <div className="container" style={displayRowStyle}>
          {this.populateResources()}
        </div>
        <div>
          <RaisedButton
            label="Home"
            primary={true}
            style={margin}
            containerElement={<Link to="/" />}
          />
        </div>
      </div>
    )
  }
}
