import React, {Component}  from 'react'
import PropTypes from 'prop-types'
import WebFont from 'webfontloader'

import ReportForm from './reportForm'
import Header from '../../header'
import Footer from '../../footer'


WebFont.load({
  google: {
    families: ['Open Sans:300,400,700', 'sans-serif']
  }
});

const style = {
  height: 100,
  width: 100,
  margin: 20,
  textAlign: 'center',
  display: 'inline-block',
};

export default class FileReportLanding extends Component {
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div>
        <Header />
        <div className="body-content">
          <ReportForm />
        </div>
        <Footer />
      </div>
    )
  }
}
