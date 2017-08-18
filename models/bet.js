const mongoose = require('mongoose');

const BetSchema = mongoose.Schema({
  round_id: {type: Number, required: true},
  user: {type: String, required: true },
  category: {type: String, required: true },
  amount: {type: Number, required: true },
  created_at: Date
});

const Bet = module.exports = mongoose.model('Bet', BetSchema);


module.exports.getBetbyRoundId = (round_id, callback) => {
  Bet.find({ round_id: round_id }, callback);
};

module.exports.getBetForCalc = (round_id, category, callback) => {
  Bet.find({ round_id: round_id, category: category }, callback);
};

module.exports.addBet = (newBet, callback) => {
  newBet.save(callback);
};

module.exports.getBetbyRoundIdAndCategory = (user, round_id, category, callback) => {
  Bet.findOne({ round_id: round_id, user: user, category: category}, (err, userFound) => {
    if(err)
      callback(err, null);
    else if(userFound)
      callback(null, true);
    else
      callback(null, false);
  });
};

// Can add many more of these functions like below for various statistics
module.exports.countBetbyRoundIdAndCategory = (round_id, category, callback) => {
  // count all bets per category for statistics throughout app
  // for now below
  callback(round_id);
};

module.exports.countBetbyRoundId = (round_id, callback) => {
  // count all bets for current round
  // for now below
  callback(round_id);
};
