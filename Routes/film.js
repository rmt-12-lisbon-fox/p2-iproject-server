const express = require('express');
const FilmController = require('../Controller/FilmController');
const route = express.Router();

route.get('/', FilmController.getListOfFilm);

module.exports = route;