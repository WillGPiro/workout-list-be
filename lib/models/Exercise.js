const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  sets: {
    type: Number,
    required: true,
    min: 2,
    max: 7
  },
  reps: {
    type: Number,
    required: true,
    min: 1,
    max: 20
  }
});

module.exports = mongoose.model('Exercise', schema);

