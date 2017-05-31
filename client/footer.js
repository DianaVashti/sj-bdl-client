import React, {Component} from 'react';
import PropTypes from 'prop-types';
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
        <Paper zDepth={1}>
          <BottomNavigation selectedIndex={this.state.selectedIndex}>
            <BottomNavigationItem
              label="LOGIN"
              icon={favoritesIcon}
              onTouchTap={() => this.select(0)}
            />
          </BottomNavigation>
        </Paper>
      </div>  
    );
  }
}
