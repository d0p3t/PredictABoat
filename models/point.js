const mongoose = require('mongoose');

const PointSchema = mongoose.Schema({
  user: {type: String, required: true , unique: true },
  points: {
    finalscore: { type: Number, default: 0 },
    matches: { type: Number, default: 0 },
  },
  total_points: { type: Number, required: true, default: 0 },
  created_at: { type: Date, required: true, default: Date.now },
  updated_at: { type: Date, required: true, default: Date.now }
});

const Point = module.exports = mongoose.model('Point', PointSchema);


module.exports.getByUsername = (username, callback) => {
  Point.findOne({ user: username }, callback);
};

// for updating points fields
module.exports.updatePoint = (username, updatedData, callback) => {
  Point.findOneAndUpdate( { user: username }, updatedData, { upsert: true }, callback);
};

// on first bet ever create document for user
module.exports.newPoint = (newPoint, callback) => {
  newPoint.save(callback);
};
