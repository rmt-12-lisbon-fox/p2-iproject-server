const express = require ('express')
const router = express.Router()
const ControllerFounder = require('../controllers/controllerFounder.js')

router.get('/', ControllerFounder.fetchFounders)
router.get('/:id', ControllerFounder.fetchFounderProfile)

module.exports = router