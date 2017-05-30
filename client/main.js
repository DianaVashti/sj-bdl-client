import React from 'react'
import ReactDOM from 'react-dom'
import ReactRouter from './ReactRouter'
import injectTapEventPlugin from 'react-tap-event-plugin';

injectTapEventPlugin();

ReactDOM.render(<ReactRouter />, document.getElementById('root'))
