const router = require('express').Router()

const covidApiController = require('../controllers/covidApiController')

router.get('/checkCovidSymptoms', covidApiController.checkCovidSymptoms)

module.exports = router