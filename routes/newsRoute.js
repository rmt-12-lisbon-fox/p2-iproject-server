const express = require ('express')
const router = express.Router()
const Controller = require('../controllers/controllerNews.js')

router.get('/', Controller.getNews)

module.exports = router