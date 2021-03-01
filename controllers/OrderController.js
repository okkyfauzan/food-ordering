const { Restaurant, Menu, Order } = require('../models')

class OrderController {
  static async inputOrder(req, res) {        
    try {
      const data = {
        amount: req.body.amount,
        description: req.body.description,
        RestaurantId: req.body.RestaurantId,
        MenuId: req.body.MenuId
      }
      const order = await Order.create(data)
      res.status(201).json(order)
    } catch (err) {
      res.status(500).json(err)
    }
  }

  static async showOrder(req, res) {
    try {
      const data = await Order.findAll({
        order: [['id', 'ASC']],
        include: [Restaurant, Menu],
        returning: true
      })
      res.status(200).json(data)
    } catch (err) {
      res.status(500).json(err)
    }
  }
}

module.exports = OrderController