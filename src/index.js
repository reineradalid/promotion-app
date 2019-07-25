import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Dashboard from './components/dashboard.js';
import Widget from './components/sub_components/widget.js';
import * as serviceWorker from './serviceWorker';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'

const routing = (
    <Router>
      <div>
        <Route path="/" component={App} />
        <Route path="./components/sub_components/widget.js" component={Widget} />
        <Route path="./components/dashboard.js" component={Dashboard} />
      </div>
    </Router>
  )

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
