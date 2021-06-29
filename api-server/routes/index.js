const router = require('express').Router()

const covidApiRouter = require('../routes/covidApiRouter')
const coughApiRouter = require('../routes/coughApiRouter')
const rasaApiRouter = require('../routes/rasaApiRouter')
const userRouter = require('../routes/userRouter')
const authentication = require('../middleware/authentication')

router.use('/', userRouter)

router.use(authentication)

router.use('/', covidApiRouter)
router.use('/', coughApiRouter)
router.use('/', rasaApiRouter)

module.exports = router