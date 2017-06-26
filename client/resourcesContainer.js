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
      open: false,
      anchorOrigin: {
        horizontal: 'left',
        vertical: 'center',
      },
      targetOrigin: {
        horizontal: 'middle',
        vertical: 'top',
      },
      resources: [],
    };
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

  setAnchor = (positionElement, position) => {
      const {anchorOrigin} = this.state;
      anchorOrigin[positionElement] = position;

      this.setState({
        anchorOrigin: anchorOrigin,
      });
    };

    setTarget = (positionElement, position) => {
      const {targetOrigin} = this.state;
      targetOrigin[positionElement] = position;

      this.setState({
        targetOrigin: targetOrigin,
      });
    };

  fetchResources() {
    axios.get('http://localhost:8080/api/services')
    .then((res) => {
      console.log("RES", res);

      this.setState((prevState) => {
        return {
          open: prevState.open,
          anchorOrigin: {
          horizontal: prevState.anchorOrigin.horizontal,
          vertical: prevState.anchorOrigin.vertical,
          },
          targetOrigin: {
            horizontal: prevState.targetOrigin.horizontal,
            vertical: prevState.targetOrigin.vertical,
          },
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
        <List className="resource-item" key={resource._id}>
          <div className="resource-name">
            <ListItem
              primaryText={resource.name}
            />
          </div>
          <div className="svg-icons">
            <ListItem
              rightIcon={<CommunicationCall style={iconStyles} color={indigo500} />}
            />
            <ListItem
              rightIcon={<ActionHome style={iconStyles}  />} />
            <ListItem
              rightIcon={<ActionGrade style={iconStyles} onTouchTap={this.handleTouchTap} />} />
          </div>
        </List>
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
