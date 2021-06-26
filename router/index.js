const express = require('express')
const UserController = require('../controller/userController')
const router = express.Router()

router.post('/steamLogin',UserController.steamLogin)
router.post('/login',UserController.login)
router.post('/register',UserController.register)
router.post('/news',UserController.getNews)

module.exports = router