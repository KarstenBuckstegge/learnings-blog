// import babelifyPolyfill from 'babelify/polyfill';
// var io = require('./dependencies/sails.io.js')();
import React from 'react';
import Title from './components/title.jsx';

var babel = function babel(val) {
  val.map( x => x * 2);
};

class App extends React.Component {
  render() {
    // console.log('================================== props: ', this.props);
    return <div>Aloa!</div>
  }
}

export default App;