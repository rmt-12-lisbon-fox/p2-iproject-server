const router = require('express').Router()

const sendLogController = require('../controllers/sendLogController')

router.post('/sendLog', sendLogController.sendLog)

module.exports = router