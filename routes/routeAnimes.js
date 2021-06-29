const routes = require('express').Router()
const Controller = require('../controllers/controlAnimes')

routes.get('/', (req, res) => {
  res.send('Welcome to Aniplay route anime')
})



module.exports = routes