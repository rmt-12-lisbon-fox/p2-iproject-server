const express = require('express')
const router = express.Router()
const AuthController = require('../controllers/authController')
const decksRoute = require('./decksRoute')
const wikiRoute = require('./wikiRoute')
const profileRoute = require('./profileRoute')
const errorHandler = require('../middlewares/errorHandler')
const {authentication, authorization} = require('../middlewares/auth')

router.post('/register', AuthController.postRegister)
router.post('/login', AuthController.postLogin)
// router.get('/profile', authentication, AuthController.getProfile)
router.use('/profile', authentication, profileRoute)

router.use('/wiki', wikiRoute)
router.use(authentication)
router.use('/decks', decksRoute)

router.use(errorHandler)

module.exports = router