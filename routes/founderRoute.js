const express = require ('express')
const router = express.Router()
const ControllerFounder = require('../controllers/controllerFounder.js')
const authentication = require ('../middlewares/authentication.js')

router.get('/', ControllerFounder.fetchFounders) // OK
router.get('/:id', ControllerFounder.fetchFounderProfile) // OK

router.use(authentication)
router.patch('/verify/:id', ControllerFounder.verifyFounder) // OK

module.exports = router