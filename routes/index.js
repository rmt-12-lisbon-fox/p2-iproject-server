const routes = require('express').Router()
const anime = require('./routeAnimes')

routes.get('/', (req, res) => {
  res.send('Welcome to Aniplay')
})

routes.use('/anime', anime)


module.exports = routes