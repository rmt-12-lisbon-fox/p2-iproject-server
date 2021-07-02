const router = require('express').Router()
const dadJokes = require('../middlewares/dadJokes')

router.get('/', dadJokes)

module.exports = router