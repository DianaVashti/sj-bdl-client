import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router'
import FontIcon from 'material-ui/FontIcon';
import {
  BottomNavigation,
  BottomNavigationItem
} from 'material-ui/BottomNavigation';
import Paper from 'material-ui/Paper';

const favoritesIcon = <FontIcon className="material-icons">Admin</FontIcon>;

export default class Footer extends Component {
  state = {
    selectedIndex: 0,
  };

  select = (index) => this.setState({selectedIndex: index});

  render() {
    return (
      <div className="footer">
        <Paper zDepth={3}>
          <BottomNavigation selectedIndex={this.state.selectedIndex}>
            <BottomNavigationItem
              label="LOGIN"
              icon={favoritesIcon}
              onTouchTap={() => this.select(0)}
              containerElement={<Link to="/admin-login" />}
            />
          </BottomNavigation>
        </Paper>
      </div>
    );
  }
}
