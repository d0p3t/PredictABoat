const mongoose = require('mongoose');
const config = require('../config');
const Chat = require('./chatSystem');
const GameConnector = require('./gameConnector');


const Core = module.exports = () => {
  mongoose.connect("mongodb://" + config.db.uri + "", config.db.options);
  let db = mongoose.connection;

  db.on('error', (err) => {
    console.log('Error connecting to MongoDB');
  });

  //GameConnector();

  Chat.connect((callback) => {
    console.log(callback);
  });

  Chat.commands((callback) => {
    console.log(callback);
  });
};
