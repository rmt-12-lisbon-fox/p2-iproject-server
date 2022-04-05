const express = require('express')
const router = express.Router()
const WikiController = require('../controllers/wikiController')

router.get('/', WikiController.getAllCards)
router.get('/attributes', WikiController.getAttributes)
router.get('/types', WikiController.getTypes)
router.get('/races', WikiController.getRaces)
router.get('/latest', WikiController.getLatest)
router.get('/twitterSearch', WikiController.getTwitter)
router.get('/:cardId', WikiController.getCard)

module.exports = router