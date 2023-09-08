const Food = require('../model/food');


exports.updateFood = async (req, res) => {
    try {
      const { meal, drink, totalPrice, passengerId } = req.body;
  
  
      const food = new Food({ meal, drink, totalPrice, passengerId });
      console.log(food);
      const savedFood = await food.save();
  
      res.status(201).json(savedFood);
    } catch (error) {
      res.status(500).json({ error: 'An error occurred while saving food information.' });
    }
  };
  exports.getFoodByPassengerId = async (req, res) => {
    const { passengerId } = req.query;
  
    try {
     
      const foodData = await Food.findOne({ passengerId });
  
      if (!foodData) {
        return res.status(404).json({ message: 'Food data not found for the passenger.' });
      }
      console.log(foodData);
      
      res.status(200).json(foodData);
    } catch (error) {
      console.error('Error fetching food data:', error);
      res.status(500).json({ message: 'Internal server error' });
    }
  };
  