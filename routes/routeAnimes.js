const routes = require('express').Router()
const Controller = require('../controllers/controlAnimes')

routes.get('/', (req, res) => {
  res.send('Welcome to Aniplay route anime')
})

// Information
routes.get('/search', Controller.searchAnime )
routes.get('/upcoming', Controller.upcomingAnime )


// Streaming

routes.get('/latest', Controller.latestAnime )
routes.get('/search/videos', Controller.searchAnimeVideos )
routes.get('/details', Controller.detailsAnime )

module.exports = routes