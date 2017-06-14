import React, {Component}  from 'react'
import PropTypes from 'prop-types';
import ToolBarHeader from './toolBarHeader'
import DesktopForm from './desktopOnly/desktopForm'
import MobileForm from './mobileOnly/mobileForm'

export default class FileReport extends Component {
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div>
        <ToolBarHeader />
        <div className="desktop-form-container">
          <DesktopForm />
        </div>
        <div className="mobile-form-container">
          <MobileForm />
        </div>
      </div>
    )
  }
}
