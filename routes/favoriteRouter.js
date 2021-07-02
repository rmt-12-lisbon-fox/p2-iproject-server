const router = require('express').Router()
const FavComController = require('../controllers/favComController')

router.get('/', FavComController.findAllFavorites)
router.post('/', FavComController.addToFavorite)

module.exports = router