const router = require('express').Router()
const userRouter = require('./userRouter')
const comedianRouter = require('./comedianRouter')
const { authentication } = require('../middlewares/auth')
const favoriteRouter = require('./favoriteRouter')
const dadJokesRouter = require('./dadJokesRouter')

router.use('/', userRouter)
router.use(authentication)
router.use('/comedians', comedianRouter)
router.use('/favorites', favoriteRouter)
router.use('/jokes', dadJokesRouter)

module.exports = router