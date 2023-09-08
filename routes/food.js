const express = require('express');
const router = express.Router();
const foodController = require('../controller/food');


//update food
router.post('/updatefood', foodController.updateFood); 

router.get('/getfood',foodController.getFoodByPassengerId);



module.exports = router;