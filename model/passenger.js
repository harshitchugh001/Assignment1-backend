const mongoose = require('mongoose');

const passengerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  destination: {
    type: String,
    required: true,
  },
  seatNumber: {
    type: String,
    required: true,
  },
});

const Passenger = mongoose.model('Passenger', passengerSchema);

module.exports = Passenger;
