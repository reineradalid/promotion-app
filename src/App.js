import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Dash from './components/dashboard.js'
import Widget2 from './components/sub_components/widget2.js';

import './App.css';


function App() {
  return (
    <div className="App">
     <Widget2/>
    </div>
  );
}

const { bool } = PropTypes;

App.propTypes = {
  authenticated: bool.isRequired,
  checked: bool.isRequired
};

const mapState = ({ session }) => ({
  checked: session.checked,
  authenticated: session.authenticated
});

export default connect(mapState)(App);
