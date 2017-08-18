const mongoose = require('mongoose');

const PointSchema = mongoose.Schema({
  user: {type: String, required: true , unique: true },
  points: {
    finalscore: { type: Number, required: true, default: 0 },
    matches: { type: Number, required: true, default: 0 },
  },
  created_at: { type: Date, required: true, default: Date.now },
  updated_at: Date
});

const Point = module.exports = mongoose.model('Point', PointSchema);


module.exports.getByUsername = (username, callback) => {
  Point.find({ user: username }, callback);
};

// for updating points fields
module.exports.updatePoint = (updatedPoint, callback) => {
  updatedPoint.save(callback);
};

// on first bet create document for user
module.exports.newPoint = (newPoint, callback) => {
  newPoint.save(callback);
};
