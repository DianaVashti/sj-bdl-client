import React, {Component}  from 'react'
import PropTypes from 'prop-types';
import RaisedButton from 'material-ui/RaisedButton';

export default class MobileLandingBtns extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="landing-page-main-btn-container">
        <RaisedButton
          className="landing-page-main-btn"
          label="Report a Bad Date"
          primary={true} />
        <RaisedButton
          className="landing-page-main-btn"
          label="Read Reports"
          backgroundColor="#a4c639" />
        <RaisedButton
          className="landing-page-main-btn"
          label="Get Support / Resources"
          secondary={true} />
      </div>
    )
  }
}
