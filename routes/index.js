const router = require('express').Router()
const { RestaurantController, FoodController, OrderController } = require('../controllers')

router.get('/restaurants', RestaurantController.show)
router.get('/restaurants/:id', RestaurantController.showById)
router.post('/restaurants', RestaurantController.input)
router.put('/restaurants/:id', RestaurantController.update)
router.delete('/restaurants/:id', RestaurantController.delete)


router.post('/foods', FoodController.inputFood)

router.post('/orders', OrderController.inputOrder)
router.get('/orders', OrderController.showOrder)

module.exports = router