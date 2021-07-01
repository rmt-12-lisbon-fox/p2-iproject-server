const router = require('express').Router()
const location = require('../middlewares/location')

router.get('/', location)

module.exports = router