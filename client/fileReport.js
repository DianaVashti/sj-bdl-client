import React, {Component}  from 'react'
import PropTypes from 'prop-types'
import ToolBarHeader from './toolBarHeader'
import ReportForm from './Form/reportForm'
import WebFont from 'webfontloader'

WebFont.load({
  google: {
    families: ['Open Sans:300,400,700', 'sans-serif']
  }
});

const style = {
  margin: 20
};

export default class FileReport extends Component {
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div>
        <ToolBarHeader />
        <ReportForm />
      </div>
    )
  }
}
