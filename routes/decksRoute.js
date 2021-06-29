const express = require('express')
const router = express.Router()
const DecksController = require('../controllers/decksController')
const {authorization} = require('../middlewares/auth')

router.get('/', DecksController.getAllDecks)
router.get('/:deckId', DecksController.getDeck)

router.use(authorization)
router.put('/:deckId/edit', DecksController.putDeck)
router.delete('/:deckId/delete', DecksController.deleteDeck)

module.exports = router