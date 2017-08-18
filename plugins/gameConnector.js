const autobahn = require('autobahn');
const config = require('../config');

const gameConnection = new autobahn.Connection({
    url: 'ws://' + config.wamp.url + config.wamp.port + '/',
    realm: 'betsystem'
});

gameConnection.onopen = function (session) {
    console.log('gameConnection socket is open');
};

gameConnection.onclose = function (reason, details) {
    console.log('gameConnection socket closed');
};

gameConnection.open();
