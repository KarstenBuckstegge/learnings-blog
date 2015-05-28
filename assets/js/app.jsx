// import babelifyPolyfill from 'babelify/polyfill';
// var io = require('./dependencies/sails.io.js')();
import React from 'react';
import Title from './components/title.jsx';

console.log('Sails.sockets.io', io);

var babel = function babel(val) {
  val.map( x => x * 2);
};

React.render(
  <Title />,
  document.getElementById('main-title')
);
