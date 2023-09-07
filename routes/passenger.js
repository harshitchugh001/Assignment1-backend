const express = require('express');
const router = express.Router();
const passengerController = require('../controller/passenger');


router.post('/addpassenger', passengerController.addPassenger);

// Get a list of all passengers
router.get('/getpassenger', passengerController.getAllPassengers);


module.exports = router;
