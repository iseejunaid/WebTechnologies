const mongoose = require('mongoose');

const tourSchema = new mongoose.Schema({
  title: String,
  persons: Number,
  days: Number,
  price: Number,
  location: String,
});

module.exports = mongoose.model('TourModel', tourSchema);
