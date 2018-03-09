import React, {Component}  from 'react'
import PropTypes from 'prop-types'
import AdminMain from './adminMain'

export default class ViewReportsLanding extends Component {
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div>
        <AdminMain />
      </div>
    )
  }
}
