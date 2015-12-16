// import babelifyPolyfill from 'babelify/polyfill';
// var io = require('./dependencies/sails.io.js')();
import React    from 'react';

import Routes   from './routing.jsx';

class App extends React.Component {
  render() {
    var route = this.props.route;
    <Routes route="route" />
  }
}

export default App;