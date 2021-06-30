const express = require('express')
const Controller = require('../controllers/userController')
const auth = require('../middlewares/auth')
const errorHandler = require('../middlewares/errorHandler')
const router = express.Router()

router.post('/register', Controller.register)

router.post('/login', Controller.login) 

router.post('/share', Controller.share) 

router.use(errorHandler)


module.exports = router;