import React, { Component } from 'react';
import { Link, browserHistory } from 'react-router'

import axios from 'axios';
import RaisedButton from 'material-ui/RaisedButton';
import Popover from 'material-ui/Popover/Popover';

import Header from './Header';
import AdminReportsDetail from './AdminReportsDetail';
import AdminResourceForm from './AdminResourceForm';
import EditResourceContainer from './EditResourceContainer';

const styles = {
  viewStyle: {
    display: 'flex',
    minHeight: '100vh',
    flexDirection: 'column',
  },
  bodyStyle: {
    flex: 1,
  },
  footerStyle: {
    display: 'flex',
    flexDirection: 'row',
    height: 45,
    marginTop: 10
  },
  footerLeft: {
    display: 'flex',
    flex: 2,
    marginLeft: 15
  },
  footerRight: {
    display: 'flex',
    flex: 1,
    justifyContent: 'flex-end',
    marginRight: 15,
  }
};

export default class AdminInterface extends Component {
  constructor(props) {
    super(props);
    this.state = {
      addOpen: false,
      editOpen: false,
      anchorOrigin: {
        horizontal: 'right',
        vertical: 'bottom',
      },
      targetOrigin: {
        horizontal: 'left',
        vertical: 'bottom',
      }
    };
  }

  setAnchor = (positionElement, position) => {
      const { anchorOrigin } = this.state;
      anchorOrigin[positionElement] = position;

      this.setState({
        anchorOrigin
      });
    };

    setTarget = (positionElement, position) => {
      const { targetOrigin } = this.state;
      targetOrigin[positionElement] = position;

      this.setState({
        targetOrigin
      });
    };

    handleRequestClose = () => {
      this.setState({
        editOpen: false,
        addOpen: false,
      });
    };

    handleTouchTapAdd = (event) => {
      // This prevents ghost click.
      event.preventDefault();
      this.setState({
        addOpen: true,
        anchorEl: event.currentTarget,
      });
    };

    handleTouchTapEdit = (event) => {
      // This prevents ghost click.
      event.preventDefault();
      this.setState({
        editOpen: true,
        anchorEl: event.currentTarget,
      });
    };

  logOut() {
    axios.defaults.headers.common['x-auth'] = sessionStorage.getItem('auth');
    axios.delete('http://localhost:8080/api/admins/logout')
      .then(() => {
        browserHistory.push('/');
        sessionStorage.clear();
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    return (
      <div>
        <Header />
        <AdminReportsDetail style={styles.bodyStyle} />
        <div style={styles.footerStyle}>
          <div style={styles.footerLeft}>
            <RaisedButton
              label="Add Resource"
              primary={false}
              backgroundColor="#a4c639"
              labelColor="#090200"
              onTouchTap={this.handleTouchTapAdd}
              style={{ margin: 5 }}
            />
              <Popover
                open={this.state.addOpen}
                anchorEl={this.state.anchorEl}
                anchorOrigin={this.state.anchorOrigin}
                targetOrigin={this.state.targetOrigin}
                onRequestClose={this.handleRequestClose}
                style={{
                  padding: 5,
                  width: '50%',
                  boxShadow: '3px 3px 3px #E0E0E0',
                  border: '1px solid #E0E0E0'
                }}
              >
                <AdminResourceForm />
              </Popover>
              <RaisedButton
                label="Edit Resources"
                secondary
                labelColor="#090200"
                onTouchTap={this.handleTouchTapEdit}
                style={{ margin: 5 }}
              />
                <Popover
                  open={this.state.editOpen}
                  anchorEl={this.state.anchorEl}
                  anchorOrigin={this.state.anchorOrigin}
                  targetOrigin={this.state.targetOrigin}
                  onRequestClose={this.handleRequestClose}
                  style={{
                    padding: 15,
                    width: '85%',
                    height: '85%',
                    boxShadow: '3px 3px 3px #E0E0E0',
                    border: '1px solid #E0E0E0'
                  }}
                >
                  <EditResourceContainer />
                </Popover>
          </div>
          <div style={styles.footerRight}>
            <RaisedButton
              label="Log Out"
              primary={false}
              backgroundColor="#E21E26"
              labelColor="#FAFAFA"
              onTouchTap={this.logOut}
              style={{
                marginRight: 15,
                boxShadow: '0',
                backgroundColor: 'FAFAFA'
              }}
            />
          </div>
        </div>
      </div>
    );
  }
}
