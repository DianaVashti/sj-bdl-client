import React, {
    Component
} from 'react'
import PropTypes from 'prop-types';
import {
    Link
} from 'react-router'

import RaisedButton from 'material-ui/RaisedButton';

const labelStyle = {
    font: '2.7em',
}

const buttonStyle = {
    height: '6vh',
    font: '2.7em',
}

export default class MobileLandingBtns extends Component {
    constructor(props) {
        super(props);
    }
    //notes: href prop on raised buttons is a redirect, not going to be like
    //react-router single page view
    render() {
        return ( <
            div className = "landing-page-main-btn-container" >
            <
            RaisedButton className = "landing-page-main-btn"
            label = "Report a Bad Date"
            backgroundColor = "#C62828"
            fullWidth="true"
            // primary = {
            //     true
            // }
            labelStyle = {
                labelStyle
            }
            buttonStyle = {
                buttonStyle
            }
            href = "/submit-report" / >
            <
            RaisedButton className = "landing-page-main-btn"
            label = "Read Reports"
            backgroundColor = "#EEEEEE"
            fullWidth="true"
            labelStyle = {
                labelStyle
            }
            buttonStyle = {
                buttonStyle
            }
            href = "/view-reports" / >
            <
            RaisedButton className = "landing-page-main-btn"
            label = "Get Support / Resources"
            backgroundColor = "#9E9E9E"
            fullWidth="true"
            // secondary = {
            //     true
            // }
            labelStyle = {
                labelStyle
            }
            buttonStyle = {
                buttonStyle
            }
            href = "/support" / >
            <
            /div>
        )
    }
}
