const router = require('express').Router()

const rasaApiController = require('../controllers/rasaApiController')

router.get('/talkToChatbot', rasaApiController.talkToChatbot)

module.exports = router