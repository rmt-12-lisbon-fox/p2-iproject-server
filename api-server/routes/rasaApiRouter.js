const router = require('express').Router()

const rasaApiController = require('../controllers/rasaApiController')

router.post('/talkToChatbot', rasaApiController.talkToChatbot)

module.exports = router