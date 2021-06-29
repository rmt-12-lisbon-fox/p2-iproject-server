const express = require('express')
const router = express.Router()
const AuthController = require('../controllers/authController')
const decksRoute = require('./decksRoute')
const wikiRoute = require('./wikiRoute')
const errorHandler = require('../middlewares/errorHandler')

router.post('/register', AuthController.postRegister)
router.post('/login', AuthController.postLogin)
router.post('/profile', AuthController.getProfile)

router.use('/decks', decksRoute)
router.use('/wiki', wikiRoute)

router.use(errorHandler)

module.exports = router