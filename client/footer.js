import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router'
import {BottomNavigation, BottomNavigationItem} from 'material-ui/BottomNavigation';
import IconLocationOn from 'material-ui/svg-icons/communication/location-on';
import FontIcon from 'material-ui/FontIcon';

const recentsIcon = <FontIcon className="material-icons">restore</FontIcon>;
const favoritesIcon = <FontIcon className="material-icons">favorite</FontIcon>;
const nearbyIcon = <IconLocationOn />;

const pStyle={font: '11px "Open Sans"'}

export default class Footer extends Component {
  constructor(props){
    super(props);
    this.state = {
      selectedIndex: 0,
    };
  }

  render() {
    return (
      <div className="footer-navbar" >
        <BottomNavigation selectedIndex={this.state.selectedIndex}>
          <BottomNavigationItem
            label="Home"
            icon={recentsIcon}
            onTouchTap={() => this.select(0)}
            containerElement={<Link to="/" />}
          />
          <BottomNavigationItem
            label="Read"
            icon={favoritesIcon}
            onTouchTap={() => this.select(1)}
            containerElement={<Link to="/view-reports" />}
          />
          <BottomNavigationItem
            label="Support"
            icon={nearbyIcon}
            onTouchTap={() => this.select(2)}
            containerElement={<Link to="/support" />}
          />
        </BottomNavigation>
      </div>
    )
  }
}
