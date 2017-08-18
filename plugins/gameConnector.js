const autobahn = require('autobahn');
const config = require('../config');
const BetRound = require('./bettingSystem');

const GameConnector = module.exports = () => {
  var connection = new autobahn.Connection({
      url: 'ws://' + config.wamp.url + ':' + config.wamp.port + '/',
      realm: config.wamp.realm
  });
  connection.onopen = function (session, details) {
      console.log('WAMP connection is open');
      // Listen for events here and fire bettingSystem methods whenever needed
  };

  connection.onclose = function (reason, details) {
      console.log('WAMP connection closed (Reason: '+ reason + ')');
  };

  connection.open();
};
