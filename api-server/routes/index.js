const router = require('express').Router()

const covidApiRouter = require('../routes/covidApiRouter')
const coughApiRouter = require('../routes/coughApiRouter')
const rasaApiRouter = require('../routes/rasaApiRouter')

router.use('/', covidApiRouter)
router.use('/', coughApiRouter)
router.use('/', rasaApiRouter)

module.exports = router