import React, {Component}  from 'react'
import {Link} from 'react-router'
import PropTypes from 'prop-types';
import IconMenu from 'material-ui/IconMenu';
import IconButton from 'material-ui/IconButton';
import FontIcon from 'material-ui/FontIcon';
import NavigationExpandMoreIcon from 'material-ui/svg-icons/navigation/expand-more';
import MenuItem from 'material-ui/MenuItem';
import DropDownMenu from 'material-ui/DropDownMenu';
import RaisedButton from 'material-ui/RaisedButton';
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';

export default class ToolBarHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 1,
    };
  }


  render() {
    return (
      <Toolbar>
        <ToolbarGroup className="toolbar-container-items">
          <ToolbarTitle
            text="SF BAD DATE LIST"
            style={{
              font: '2.7em "Open Sans"'
            }}
          />
          <FontIcon className="muidocs-icon-custom-sort" />
          <ToolbarSeparator />
          <RaisedButton
            label="Report a Bad Date"
            primary={true}
          />
          <IconMenu
            iconButtonElement={
              <IconButton touch={true}>
                <NavigationExpandMoreIcon />
              </IconButton>
            }
          >
            <MenuItem
              primaryText="Home"
              containerElement={<Link to="/" />} />
            <MenuItem
              primaryText="View and Search Reports"
              containerElement={<Link to="/view-reports" />} />
            <MenuItem
              primaryText="Report a Bad Date"
              containerElement={<Link to="/" />} />
            <MenuItem
              primaryText="Resources / Support"
              containerElement={<Link to="/" />} />
          </IconMenu>
        </ToolbarGroup>
      </Toolbar>
    )
  }
}
