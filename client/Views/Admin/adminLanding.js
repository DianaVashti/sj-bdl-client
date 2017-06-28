import React, {Component}  from 'react'
import PropTypes from 'prop-types'
import AdminMain from './adminMain'
import Footer from '../../footer'
import Header from '../../header'

// WebFont.load({
//   google: {
//     families: ['Open Sans:300,400,700', 'sans-serif']
//   }
// });

export default class ViewReportsLanding extends Component {
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div>
        <Header />
        <div>
          <AdminMain />
        </div>
        <Footer />
      </div>
    )
  }
}
