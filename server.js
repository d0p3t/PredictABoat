const autobahn = require('autobahn');
const tmi = require('tmi.js');
const config = require('config');

const gameConnection = new autobahn.Connection({
    url: 'ws://' + config.wamp.url + config.wamp.port + '/',
    realm: 'betsystem'
});

const client = new tmi.client(config.tmi.options);

gameConnection.onopen = function (session) {
    console.log('connecting to twitch chat');
    client.connect();

    client.on('connected', () => {
        console.log('connected to twitch chat');
    });

    console.log('gameConnection socket is open');
};

gameConnection.onclose = function (reason, details) {
    console.log('gameConnection socket closed');
}

gameConnection.open();
