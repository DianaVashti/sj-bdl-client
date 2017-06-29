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
import Paper from 'material-ui/Paper';

const toolBarStyles = {
	height: '70px',
  justifyContent: 'flex-end',
  boxShadow: '0px 1px 8px 0px rgba(10, 2, 0, 0.8)',
  backgroundColor: '#C8C5C5'
}

const groupStyles = {
  height: '70px',
  justifyContent: 'flex-end',
}

export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 1,
    };
  }

  render() {
    return (
      <div className="header-navbar">
        <Toolbar
          style={toolBarStyles} >
          <ToolbarGroup
            className="toolbar-container-items"
            style={groupStyles}>
            <Link to="/submit-report" ><RaisedButton
              label="Report a Bad Date"
							labelStyle={{fontSize: ".9em"}}
              labelColor="#fff"
              backgroundColor= "#D32F2F"/></Link>
          </ToolbarGroup>
        </Toolbar>
      </div>
    )
  }
}
