const express = require('express')
const router = express.Router()
const ControllerFounder = require('../controllers/controllerFounder.js')
const authentication = require ('../middlewares/authentication.js')
const errorHandler = require('../middlewares/errorHandler.js')

let homeRoute = require('./homeRoute.js')
let reviewRoute = require('./reviewRoute.js')
let founderRoute = require('./founderRoute.js')

router.use('/', homeRoute);
router.post('/register', ControllerFounder.register)
router.post('/googlelogin', ControllerFounder.googleLogin)
router.post('/login', ControllerFounder.login)

router.use(authentication)

router.get('/logout', ControllerFounder.logout)
router.use('/reviews', reviewRoute);
router.use('/users', founderRoute);

router.use(errorHandler)

module.exports = router