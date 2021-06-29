const Controller = require('../controllers/controllerMusic')
const router = require('express').Router()
const musicAPI = require('../midlewere/musicApI')

router.post('/:id', musicAPI, Controller.addMusic)
router.get('/', Controller.findAll)


module.exports = router