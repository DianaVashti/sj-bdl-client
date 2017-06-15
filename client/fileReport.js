import React, {Component}  from 'react'
import PropTypes from 'prop-types';
import Paper from 'material-ui/Paper';
import ToolBarHeader from './toolBarHeader'
import ReportForm from './Form/reportForm'

const style = {
  margin: 20,
};

export default class FileReport extends Component {
  constructor(props){
    super(props);
    this.state = {
    	name: "",
    	phone: "",
    	email: "",
    	perpType: "",
    	adServiceUsed: "",
    	gender: "",
    	age: "",
    	race: "",
    	height: "",
    	hair: "",
    	attributes: "",
    	vehicle: ""
    }
  }

  render(){
    return(
      <div>
        <Paper style={style} zDepth={5} >
          <ToolBarHeader />
          <ReportForm />
        </Paper>
      </div>
    )
  }
}
