const express = require('express')
const UserController = require('../controller/userController')
const router = express.Router()

router.post('/steamLogin',UserController.steamLogin)
router.get('/login',UserController.login)

module.exports = router