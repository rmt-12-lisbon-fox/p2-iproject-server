const express = require('express')
const UserController = require('../controller/userController')
const router = express.Router()
const authentication = require('../middlewares/auth')

router.post('/checkSteam',UserController.steamProfile)
router.post('/register',UserController.register)
router.post('/login',UserController.login)
router.use(authentication)
router.post('/videos',UserController.getVideo)
router.post('/news',UserController.getNews)
router.post('/historymatch',UserController.getHistory)

module.exports = router