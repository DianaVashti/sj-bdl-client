import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router'
import {BottomNavigation, BottomNavigationItem} from 'material-ui/BottomNavigation';
import ActionHome from 'material-ui/svg-icons/action/home';
import ActionFavorite from 'material-ui/svg-icons/action/favorite'
import ActionViewList from 'material-ui/svg-icons/action/view-list'

const pStyle={font: '11px "Open Sans"'}

export default class Footer extends Component {
  constructor(props){
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="footer-navbar">
        <BottomNavigation >
          <Link to="/"><BottomNavigationItem
            label="Home"
            icon={<ActionHome />} /></Link>
          <Link to="/view-reports"><BottomNavigationItem
            label="Read"
            icon={<ActionViewList />} /></Link>
          <Link to="/support"><BottomNavigationItem
            label="Support"
            icon={<ActionFavorite />} /></Link>
        </BottomNavigation>
      </div>
    )
  }
}
