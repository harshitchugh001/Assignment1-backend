const mongoose = require('mongoose');

const foodSchema = new mongoose.Schema({
  meal: {
    type: String,
    required: true,
  },
  drink: {
    type: String,
    required: true,
  },
  totalPrice: {
    type: Number,
    required: true,
  },
  passengerId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Passenger', 
    required: true,
  },
});

const Food = mongoose.model('Food', foodSchema);

module.exports = Food;