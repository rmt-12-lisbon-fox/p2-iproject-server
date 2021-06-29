const express = require('express')
const router = express.Router()
const WikiController = require('../controllers/wikiController')

router.get('/:cardId', WikiController.getCard)

module.exports = router