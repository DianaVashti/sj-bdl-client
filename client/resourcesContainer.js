import React, {Component}  from 'react'
import PropTypes from 'prop-types';
import {Link} from 'react-router'
import axios from 'axios';
import {List, ListItem} from 'material-ui/List';
import Divider from 'material-ui/Divider';
import Paper from 'material-ui/Paper';
import Subheader from 'material-ui/Subheader';
import CommunicationCall from 'material-ui/svg-icons/communication/call';
import ActionHome from 'material-ui/svg-icons/action/home';
import ActionGrade from 'material-ui/svg-icons/action/grade';
import {indigo500} from 'material-ui/styles/colors';
import Popover from 'material-ui/Popover/Popover';
import RaisedButton from 'material-ui/RaisedButton';

const displayRowStyle = {
  display: 'flex',
  flexDirection: 'column',
}

const marginBottom = {
  marginBottom: 14,
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
        <Paper zDepth={5} className="resources-container" key={resource._id} style={marginBottom}>
          <List className="resource-item" >
            <div className="resource-name">
              <ListItem
                primaryText={resource.name}
              />
            </div>
            <div className="svg-icons">
              <ListItem
                rightIcon={<CommunicationCall style={iconStyles} />} />
              <ListItem
                rightIcon={<ActionHome style={iconStyles}  />} />
              <ListItem
                rightIcon={<ActionGrade style={iconStyles}  />} />
            </div>
          </List>
        </Paper>
      ))
    )
  }

  render(){
    return(
      <div>
        <div className="container" style={displayRowStyle}>
          {this.populateResources()}
        </div>
        <div className="footer">
          <RaisedButton
            label="Home"
            primary={true}
            containerElement={<Link to="/" />}
          />
        </div>
      </div>
    )
  }
}
