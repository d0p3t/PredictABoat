const tmi = require('tmi.js');
const config = require('../config');
const Commands = require('./commandSystem');
const BetRound = require('./bettingSystem');

const Chat = module.exports = {};

//const Bet = require('../models/bet');

const client = new tmi.client(config.tmi);

// Connect to Twitch chat
Chat.connect = (callback) => {
  client.connect();
  client.on('connected', (address, port) => {
    callback('Connected to Twitch');
  });
  client.on('disconnected', (reason) => {
    callback('Disconnected to Twitch. Reason - ' + reason);
  });
};

// Listen for commands
Chat.commands = (callback) => {
  client.on('chat', (channel, userstate, message, self) => {
    var user = '@' + userstate.username + ', ';
    if(message === '!help') {
        Commands.getCommands((callback) => {
          client.say(channel, user + callback);
        });
    }
    else if(message === '!faq') {
      client.say(channel, user + 'for F.A.Q. see BetABoat\'s repository https://github.com/d0p3t/BetABoat/wiki/Frequently-Asked-Questions');
    }
    else if(message === '!debugclose') {
      BetRound.close((message) => {
        client.say(channel, message);
      });
    }
    else {
      var msg = message.split(' ');
      if(msg[0] === '!bet') {
        var betCat = '';
        var betAmount = msg[2];
        switch (msg[1]) {
          case 'finalscore':
            betCat = msg[1];
            if(isFinite(betAmount)) {
              // register bet
              addNewBet(userstate.username, betAmount, betCat, (callback) => {
                client.say(channel, callback);
              });
              client.say(channel, 'LUL Debug LUL Register bet of category ' + betCat + ' with value ' + betAmount + '');
            }
            else
              client.say(channel, user + 'Oops! Your bet must be a number (i.e \'!bet ' + betCat + ' 648)');
            break;
          case 'matches':
            betCat = msg[1];
            if(isFinite(betAmount)) {
              // register bet
              client.say(channel, 'Debug: Register bet of category ' + betCat + ' with value ' + betAmount + '');
            }
            else
              client.say(channel, user + 'Oops! Your bet must be a number (i.e \'!bet ' + betCat + ' 32)');
            break;
          case 'help':
            client.say(channel, 'List of category types: <finalscore> - The final score of a run after the player has died [] <matches> - Total number of matched tiles for the total duration of one run');
            break;
          default:
            client.say(channel, user + 'invalid entry. Usage: !bet <category> <number>. For a complete list of categories type \'!bet help\'');
        }
      }
    }
  });
};

// Add chat command
Chat.addCommand = (prefix, command, subCommand,) => {

};

// HELPERS Functions
function addNewBet(username, amount, category, callback) {
  var newBet = { username: username, amount: amount, category: category };
  BetRound.enter(newBet, (err, chatMsg) => {
    if(err)
      callback('Oops! Something went wrong.');
    callback(chatMsg);
  });
}
