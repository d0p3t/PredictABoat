const config = {}

config.wamp = {
  url: '127.0.0.1',
  port: '8000'
};

config.tmi = {
  options: {
    clientId: 'enter client id',
    debug: false
  },
  connection: {
    reconnect: true
  },
  identity: {
    username: 'your username',
    password: 'your oauth token'
  },
  channels: ["#serpent_ai"]
};


module.exports =  config;
