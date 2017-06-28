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
        <Toolbar >
          <ToolbarGroup className="toolbar-container-items">
            <Link to="/submit-report" ><RaisedButton
              label="Report a Bad Date"
              labelColor="#fff"
              backgroundColor= "#D32F2F"
              color="#FAFAFA" /></Link>
          </ToolbarGroup>
        </Toolbar>
      </div>
    )
  }
}

// <ToolbarTitle
//   text="SF BAD DATE LIST"
//   style={{
//     font: '2.7em'
//   }}
// />
