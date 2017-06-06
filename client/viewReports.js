const axios = require('axios')
import React, {Component}  from 'react'
import PropTypes from 'prop-types';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import ToolBarHeader from './toolBarHeader'
import Footer from './footer'
import ExpandableCard from './expandableCard'
import Paper from 'material-ui/Paper';

export default class ViewReports extends Component {
  constructor(props) {
    super(props);
		this.state = {
			reports: []
		}
  }

  componentDidMount(){
    let self = this
    axios({
      method:'get',
      url:'http://localhost:8080/api/reports',
    })
    .then(reports => {
      console.log(reports)
      this.setState({
        reports: reports.data
      })
    })
  }

  render() {
    return (
      <Paper zDepth={3} rounded={false} >
        <div>
          <ToolBarHeader />
          <div>
            <TextField
              hintText="Enter any terms you wish to search by.
                Exmple: Name, Vehicle type etc..."
              fullWidth={true} />
          </div>
          <ExpandableCard reports={this.state.reports} />
          <Footer />
        </div>
      </Paper>
    )
  }
}
