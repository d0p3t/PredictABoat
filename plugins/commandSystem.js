const Commands = module.exports = {};

const commands = {
  '!help' : 'This is the help command',
  '!bet': { 'totalscore': 'the total score', 'matches': 'number of matches'},
  '!faq': 'faq command'
};

Commands.getCommands = (callback) => {
  const keys = Object.keys(commands);
  var message = "Available Commands: ";
  for (var k in keys) {
    if (keys.hasOwnProperty(k)) {
      message = message + keys[k] + ", ";
    }
  }
  message = message.substring(0, message.length - 2);
  callback(message);
};
