const router = require('express').Router()

const covidApiRouter = require('../routes/covidApiRouter')
const coughApiRouter = require('../routes/coughApiRouter')

router.use('/', covidApiRouter)
router.use('/', coughApiRouter)

module.exports = router