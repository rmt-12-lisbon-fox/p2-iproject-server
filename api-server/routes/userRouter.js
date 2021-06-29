const router = require('express').Router()

const userController = require('../controllers/userController')

router.post('/loginDoctor', userController.loginDoctor)
router.post('/loginGoogle', userController.loginGoogle)

module.exports = router