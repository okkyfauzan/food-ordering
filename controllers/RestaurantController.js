const { Restaurant, Menu } = require('../models')

class RestaurantController {

  static async input(req, res) {        
    try {
      const data = {
        name: req.body.name,
      }
      const resto = await Restaurant.create(data)
      res.status(201).json(resto)
    } catch (err) {
      res.status(500).json(err)
    }
  }

  static async show(req, res) {
    try {
      const data = await Restaurant.findAll({
        order: [['id', 'ASC']]
      })
      res.status(200).json(data)
    } catch (err) {
      res.status(500).json(err)
    }
  }

  static async showById(req, res) {
    try {
      const data = await Menu.findAll({
        where: {
          RestaurantId: req.params.id
        },
        include: [Restaurant],
        returning: true
      })
      res.status(200).json(data)
    } catch (err) {
      res.status(500).json(err)
    }
  }

  static async update(req, res) {
    try {
      const id = Number(req.params.id)
      const data = {
        name: req.body.name,
      }
      const resto = await Restaurant.update(data, {
        where: {
            id
        },
        returning: true
      })
        res.status(200).json(resto[1][0])
    } catch (err) {
      res.status(500).json(err)
    }
  }

  static async delete(req, res) {
    try {
      const id = Number(req.params.id)
      const data = await Restaurant.destroy({
        where: {
            id
        }
      })
      res.status(200).json({ message: `Resto success to delete` })
    } catch (err) {
      res.status(500).json(err)
    }
}
}

module.exports = RestaurantController