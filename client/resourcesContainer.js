import React, {Component}  from 'react'
import PropTypes from 'prop-types';
import {Link} from 'react-router'
import {List, ListItem} from 'material-ui/List';
import Divider from 'material-ui/Divider';
import Paper from 'material-ui/Paper';
import Subheader from 'material-ui/Subheader';
import CommunicationCall from 'material-ui/svg-icons/communication/call';
import {indigo500} from 'material-ui/styles/colors';

export default class ResourcesContainer extends Component {
  constructor(props){
    super(props);
  }

  render(){
    return(
      <Paper zDepth={5} >
        <Subheader>Contact</Subheader>
        <List className="resource-item">
          <ListItem
            leftIcon={<CommunicationCall color={indigo500} />}
            primaryText="(650) 555 - 1234"
            secondaryText="Mobile"
          />
          <ListItem
            insetChildren={true}
            primaryText="(323) 555 - 6789"
            secondaryText="Work"
          />
          <ListItem
            primaryText="aliconnors@example.com"
            secondaryText="Personal"
          />
          <ListItem
            insetChildren={true}
            primaryText="ali_connors@example.com"
            secondaryText="Work"
          />
        </List>
        <Divider inset={true} />
        <List>
          <ListItem
            leftIcon={<CommunicationEmail color={indigo500} />}
            primaryText="aliconnors@example.com"
            secondaryText="Personal"
          />
          <ListItem
            insetChildren={true}
            primaryText="ali_connors@example.com"
            secondaryText="Work"
          />
        </List>
      </Paper>
    )
  }
}
