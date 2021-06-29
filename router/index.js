const express = require('express');
const router = express.Router()
const UserController = require('../controller/UserController');
const ContentController = require('../controller/ContentController');
const authentication = require('../middlewares/authentication');

router.post('/register', UserController.register)
router.post('/login', UserController.login)
router.post('/googleLogin', UserController.loginGoogle)

router.use(authentication)

router.get('/communities', ContentController.allCommunity)


module.exports = router