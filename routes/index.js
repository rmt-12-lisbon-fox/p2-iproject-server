const routes = require('express').Router()
const animes = require('./routeAnimes')

routes.get('/', (req, res) => {
  res.send('Welcome to Aniplay')
})

routes.use('/anime', animes)


module.exports = routes