const express = require('express')
const router = express.Router()
const WikiController = require('../controllers/wikiController')
// const {authorization} = require('../middlewares/auth')

router.get('/:cardId', WikiController.getCard)

module.exports = router