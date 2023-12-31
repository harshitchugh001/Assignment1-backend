const Passenger = require('../model/passenger');
const mongoose = require('mongoose');


exports.addPassenger = async (req, res) => {
  try {
    const { name, destination, seatNumber } = req.body;
    const passenger = new Passenger({ name, destination, seatNumber });
    await passenger.save();
    res.status(201).json(passenger);
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while creating the passenger.' });
  }
};

exports.getAllPassengers = async (req, res) => {
  try {
    const passengers = await Passenger.find();
    res.status(200).json(passengers);
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while fetching passengers.' });
  }
};
