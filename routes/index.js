const express = require('express')
const router = express.Router()
const ControllerFounder = require('../controllers/controllerFounder.js')
const authentication = require ('../middlewares/authentication.js')
const errorHandler = require('../middlewares/errorHandler.js')
const multer = require('multer')
var upload = multer();

let homeRoute = require('./homeRoute.js')
let reviewRoute = require('./reviewRoute.js')
let founderRoute = require('./founderRoute.js')
let investorRoute = require('./investorRoute.js')

router.use('/', homeRoute);

router.post('/register', upload.single('profilePic'), ControllerFounder.register) // OK
router.post('/googlelogin', ControllerFounder.googleLogin) // OK
router.post('/login', ControllerFounder.login) // OK

router.use(authentication)

router.get('/logout', ControllerFounder.logout)
router.use('/reviews', reviewRoute);
router.use('/founders', founderRoute);
router.use('/investors', investorRoute);

router.use(errorHandler)

module.exports = router