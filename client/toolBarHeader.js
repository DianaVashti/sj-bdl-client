import React, {Component}  from 'react'
import {Link} from 'react-router'
import PropTypes from 'prop-types'
import IconMenu from 'material-ui/IconMenu';
import IconButton from 'material-ui/IconButton'
import FontIcon from 'material-ui/FontIcon'
import NavigationExpandMoreIcon from 'material-ui/svg-icons/navigation/expand-more'
import MenuItem from 'material-ui/MenuItem'
import RaisedButton from 'material-ui/RaisedButton'
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';
import WebFont from 'webfontloader'
import Paper from 'material-ui/Paper';

WebFont.load({
  google: {
    families: ['Open Sans:300,400,700', 'sans-serif']
  }
});


export default class ToolBarHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 1,
    };
  }


  render() {
    return (
      <Toolbar className="left-padding">
        <ToolbarGroup className="toolbar-container-items">
          <ToolbarTitle
            text="SF BAD DATE LIST"
            textColor="#333333"
            style={{
              font: '2.7em'
            }}
          />
          <FontIcon className="muidocs-icon-custom-sort" />

          <RaisedButton
            label="Report a Bad Date"
            labelColor="#fff"
            // primary={true}
            backgroundColor= "#D32F2F"
            color= "#FAFAFA"
            containerElement={<Link to="/submit-report" />}
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
              containerElement={<Link to="/submit-report" />} />
            <MenuItem
              primaryText="Resources / Support"
              containerElement={<Link to="/support" />} />
          </IconMenu>
        </ToolbarGroup>
      </Toolbar>
    )
  }
}
