// var io = require('./dependencies/sails.io.js')();
var React = require('react');
var Title = require('./react/title');

console.log('Sails.sockets.io', io);

var babel = function babel(val) {
  val.map( x => x * 2);
};

React.render(
  <Title />,
  document.getElementById('main-title')
);
