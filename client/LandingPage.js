import React, {Component}  from 'react'
import RaisedButton from 'material-ui/RaisedButton';
import ToolBarHeader from './toolBarHeader'

const style = {
  marginLeft: '3vw',
  marginRight: '3vw',
  marginTop: '8vh',
  width: '96%',
  height: '12vh',
}

export default class LandingPage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <ToolBarHeader />
        <div className="landing-page-main-btn-container">
          <RaisedButton
            className="landing-page-main-btn"
            label="Report a Bad Date"
            primary={true}
            style={style} />
          <RaisedButton
            className="landing-page-main-btn"
            label="Read Reports"
            backgroundColor="#a4c639"
            style={style} />
          <RaisedButton
            className="landing-page-main-btn"
            label="Get Support / Resources"
            secondary={true}
            style={style} />
        </div>
      </div>
    )
  }
}
