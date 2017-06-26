import React, {Component}  from 'react'
import PropTypes from 'prop-types';
import {Link} from 'react-router'
import axios from 'axios';

import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

import Footer from '../../footer'
import ExpandableCard from './expandableCard'
import Header from '../../header'

export default class ViewReports extends Component {
  constructor(props) {
    super(props);
		this.state = {
			reports: [],
      searchTerms: ''
		}
    this.onFormSubmit = this.onFormSubmit.bind(this);
    this.onInputChange = this.onInputChange.bind(this);
  }

  componentDidMount(){
    axios.get('http://localhost:8080/api/reports')
      .then(reports => {
        this.setState({
          reports: reports.data
        })
      })
      .catch((error) => {
        console.log('There was an error ', error)
      })
  }

  createSearchQuery(terms) {
    let queryString = 'http://localhost:8080/api/reports/search?keywords='
    // could probably refactor this
    for (let i = 0; i < terms.length; i++) {
      if (i !== (terms.length - 1)) {
        queryString += `${terms[i]}+`
      } else {
        queryString += `${terms[i]}`
      }
    }
    return queryString
  }

  fetchSearchResults(url) {
    axios.get(url)
      .then((reports) => {
        this.setState({
          reports: reports.data,
          searchTerm: ''
        })
      })
      .catch((error) => {
        console.log('There was an error ', error)
      })
  }

  onFormSubmit(event) {
    event.preventDefault()
    const searchQuery = this.createSearchQuery(this.state.searchTerms.split(' '))
    this.fetchSearchResults(searchQuery)
    this.setState({ searchTerms: '' })
  }

  onInputChange(event) {
    this.setState({ searchTerms: event.target.value })
  }

  render() {
    return (
      <div>
        <div >
          <form onSubmit={this.onFormSubmit}>
            <TextField
              hintText="Enter any terms you wish to search by.
                Example: Name, Vehicle type etc..."
              fullWidth={true}
              value={this.state.searchTerms}
              onChange={this.onInputChange}
            />
          </form>
        </div>
        <div className="view-reports-container" >
          <ExpandableCard reports={this.state.reports} />
        </div>
      </div>  
    )
  }
}
