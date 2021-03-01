const { Menu } = require('../models')

class FoodController {

  static async inputFood(req, res) {        
    try {
      const data = {
        name: req.body.name,
        RestaurantId: req.body.RestaurantId
      }
      const food = await Menu.create(data)
      console.log(food, "<<<<<<<<<<<<<");
      res.status(201).json(food)
    } catch (err) {
      res.status(500).json(err)
    }
  }
}

module.exports = FoodController