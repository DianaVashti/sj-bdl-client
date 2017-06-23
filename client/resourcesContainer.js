import React, {Component}  from 'react'
import PropTypes from 'prop-types';
import {Link} from 'react-router'
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

    // populateResources() {
    //   return(
    //     this.props.resources.map((resource) => (
    //       <Paper zDepth={5} className="resources-container">
    //         <List className="resource-item">
    //           <div className="resource-name">
    //             <ListItem
    //               primaryText=`"{resource.name}"`
    //             />
    //           </div>
    //           <div className="svg-icons">
    //             <ListItem
    //               rightIcon={<CommunicationCall style={iconStyles} color={indigo500} />}
    //             />
    //             <ListItem
    //               rightIcon={<ActionHome style={iconStyles}  />} />
    //             <ListItem
    //               rightIcon={<ActionGrade style={iconStyles} onTouchTap={this.handleTouchTap} />} />
    //               <Popover
    //                 open={this.state.open}
    //                 anchorEl={this.state.anchorEl}
    //                 anchorOrigin={this.state.anchorOrigin}
    //                 targetOrigin={this.state.targetOrigin}
    //                 onRequestClose={this.handleRequestClose} >
    //                   <List>
    //                     <ListItem disabled={true} primaryText=`"{resource.name}"` />
    //                     <ListItem disabled={true} primaryText=`"{resource.streetAddress}"` />
    //                     <ListItem disabled={true} primaryText=`"{resource.city}, {resource.state} {resource.zipCode}"` />
    //                     <ListItem disabled={true} primaryText=`"{resource.phone}"` />
    //                   </List>
    //               </Popover>
    //           </div>
    //         </List>
    //         <Divider inset={true} />
    //       </Paper>
    //     ))
    //   )
    // }

  render(){
    return(
      <div>
        <div className="container">
          <Paper zDepth={5} className="resources-container">
            <List className="resource-item">
              <div className="resource-name">
                <ListItem
                  primaryText="St. James Infirmary"
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
                  <Popover
                    open={this.state.open}
                    anchorEl={this.state.anchorEl}
                    anchorOrigin={this.state.anchorOrigin}
                    targetOrigin={this.state.targetOrigin}
                    onRequestClose={this.handleRequestClose} >
                      <List>
                        <ListItem disabled={true} primaryText="St. James Infirmary" />
                        <ListItem disabled={true} primaryText="234 Eddy Street" />
                        <ListItem disabled={true} primaryText="San Francisco, CA 94102" />
                        <ListItem disabled={true} primaryText="(415) 554-8494" />
                      </List>
                  </Popover>
              </div>
            </List>
            <Divider inset={true} />
          </Paper>
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
