const router = require('express').Router()

const coughApiController = require('../controllers/coughApiController')

router.get('/checkCoughType', coughApiController.checkCoughType)

module.exports = router