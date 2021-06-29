const router = require('express').Router()
const inviteRouter = require('./inviteRouter')
const tamplatesRouter = require('./tamplateRouter')
const userRouter = require('./userRouter')
const blogRouter = require('./blog')
const authRouter = require('./auth')
const musicRouter = require('./music')
const { authentication } = require('../midlewere/auth')

router.get('/', (req, res) => {
    res.send('index router')
})
router.use('/music', musicRouter)
router.use('/blog', blogRouter)
router.use('/users', userRouter) //admin
router.use('/outh', authRouter) //client
router.use('/tamplates', tamplatesRouter)
router.use(authentication)
router.use('/invites', inviteRouter) //data client undangan online


module.exports = router