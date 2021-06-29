const express = require ('express')
const router = express.Router()
const ControllerInvestor = require('../controllers/controllerInvestor.js')
const authentication = require ('../middlewares/authentication.js')
const authFounder = require ('../middlewares/authorizationFounder.js')
const adminAuth = require ('../middlewares/authorizationAdmin.js')

router.get('/', ControllerInvestor.fetchInvestors) // OK
router.get('/:id', ControllerInvestor.fetchInvestorProfile) // OK

router.use(authentication)
router.patch('/verify/:id', adminAuth, ControllerInvestor.verifyInvestor) // OK

router.use(authFounder)
router.post('/', ControllerInvestor.registerInvestors) // OK

module.exports = router