const express = require('express')
const router = express.Router()
const DecksController = require('../controllers/decksController')
const {authorization} = require('../middlewares/auth')

router.get('/', DecksController.getAllDecks)
router.post('/', DecksController.postDeck)
router.get('/:deckId', DecksController.getDeck)

router.use('/:deckId', authorization)
router.put('/:deckId', DecksController.putDeck)
router.delete('/:deckId', DecksController.deleteDeck)

module.exports = router