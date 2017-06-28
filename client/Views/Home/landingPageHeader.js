import React, {Component}  from 'react'
import {Link} from 'react-router'
import PropTypes from 'prop-types'
import IconMenu from 'material-ui/IconMenu';
import IconButton from 'material-ui/IconButton'
import FontIcon from 'material-ui/FontIcon'
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar'
import Paper from 'material-ui/Paper'

const titleStyle = {
  fontSize: ".8em" 
}

export default class Header extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="mobile-header">
        <div className="header-navbar">
          <Toolbar className="toolbar-container">
            <ToolbarGroup className="toolbar-container-items">
              <ToolbarTitle
                text="SF BAY BAD DATE LIST"
                style={titleStyle}
              />
            </ToolbarGroup>
          </Toolbar>
        </div>
      </div>
    )
  }
}
