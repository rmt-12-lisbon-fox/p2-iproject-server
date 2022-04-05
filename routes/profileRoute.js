const express = require('express')
const router = express.Router()
const ProfileController = require('../controllers/profileController')

router.get('/', ProfileController.getProfile)
router.patch('/', ProfileController.patchProfile)

module.exports = router