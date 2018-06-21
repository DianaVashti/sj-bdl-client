import React, {Component}  from 'react'
import {Link, browserHistory} from 'react-router'
import axios from 'axios';

import {Form, Field} from 'simple-react-form'
import Text from 'simple-react-form-material-ui/lib/text'
import Textarea from 'simple-react-form-material-ui/lib/textarea'

import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import RaisedButton from 'material-ui/FlatButton';

export default class EditResourceContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      resources: [],
      id: '',
      name: '',
      streetAddress: '',
      city: '',
      state: '',
      zipCode: '',
      phone: '',
      type: ''
    };

    this.fetchResources = this.fetchResources.bind(this);
    this.handleOnSubmit = this.handleOnSubmit.bind(this);
    this.handleOnDelete = this.handleOnDelete.bind(this);
  }

  componentWillMount() {
    this.fetchResources();
  }

  fetchResources() {
    axios.get('http://localhost:8080/api/services')
    .then(data => {
      this.setState({ resources: data.data });
    });
  }

  handleOnSubmit(e) {
    const { name, streetAddress, city, state, zipCode, phone, type } = this.state;

    const data = {
      name,
      streetAddress,
      city,
      state,
      zipCode,
      phone,
      type
    };

    e.stopPropagation();
    e.preventDefault();
    axios.defaults.headers.common['x-auth'] = sessionStorage.getItem('auth');
    axios.put(`http://localhost:8080/api/services/${this.state.id}`, data)
    .then(() => {

      browserHistory.push('/support');
    })
    .catch((error) => {
      console.log(error);
    });
  }

  handleOnExpand(resource) {
    this.setState({
      id: resource._id,
      name: resource.name,
      streetAddress: resource.streetAddress,
      city: resource.city,
      state: resource.state,
      zipCode: resource.zipCode,
      phone: resource.phone,
      type: resource.type
    });
  }

  handleOnDelete(e) {
    const data = this.state.id;

    e.stopPropagation();
    e.preventDefault();
    axios.defaults.headers.common['x-auth'] = sessionStorage.getItem('auth');
    axios.delete(`http://localhost:8080/api/services/${this.state.id}`, data)
    .then(() => {
      browserHistory.push('/support');
    })
    .catch((error) => {
      console.log(error);
    });
  }

  populateCards() {
    return (
      this.state.resources.map((resource) => {
        return (
          <Card
            key={resource._id}
            style={{ boxShadow: '0px 1px 8px 0.8px grey' }}
            onExpandChange={(newExpandedState: true) => this.handleOnExpand(resource)}
          >
            <CardHeader
              title={resource.name}
              actAsExpander
              showExpandableButton
            />
            <CardText expandable={true}>
              <Form state={this.state} onChange={changes => this.setState(changes)}>
                <Field fieldName='name' label='Name*' type={Text} value={this.state.name}/>
                <Field fieldName='streetAddress' label='Street Address*' type={Text} value={this.state.streetAddress}/>
                <Field fieldName='city' label='City*' type={Text} value={this.state.city}/>
                <Field fieldName='state' label='State*' type={Text} value={this.state.state}/>
                <Field fieldName='zipCode' label='Zip Code*' type={Text} value={this.state.zipCode}/>
                <Field fieldName='phone' label='Phone*' type={Text} value={this.state.phone}/>
                <Field fieldName='type' label='Type*' type={Text} value={this.state.type}/>
              </Form>
              <RaisedButton
                label="Submit"
                style={{ margin: 5 }}
                primary={false}
                backgroundColor="#a4c639"
                labelColor="#090200"
                onClick={event => this.handleOnSubmit(event)}
              />
              <RaisedButton
                label="Delete"
                style={{ margin: 5, color: 'white' }}
                primary={false}
                backgroundColor="#E21E26"
                labelColor="#090200"
                onClick={event => this.handleOnDelete(event)}
              />
            </CardText>
          </Card>
        );
      })
    );
  }

  render() {
    return (
      <div>
        <p style={{ fontSize: 18, fontStyle: 'italic' }}> *Click outside of menu to close* </p>
        {this.populateCards()}
      </div>
    );
  }
}
