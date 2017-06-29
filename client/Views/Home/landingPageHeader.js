import React, {Component}  from 'react'
import {Link} from 'react-router'
import PropTypes from 'prop-types'
import IconMenu from 'material-ui/IconMenu';
import IconButton from 'material-ui/IconButton'
import FontIcon from 'material-ui/FontIcon'
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar'
import Paper from 'material-ui/Paper'

const titleStyle = {
  fontSize: "1em"
}

const styles = {
  height: '70px',
  justifyContent: 'flex-end',
  boxShadow: '0px 1px 8px 0px rgba(10, 2, 0, 0.8)',
  backgroundColor: '#C8C5C5'
}

export default class Header extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="mobile-header">
        <div className="header-navbar">
          <Toolbar
						className="toolbar-container"
						style={styles}>
            <ToolbarGroup
              className="toolbar-container-items">
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
