const express = require('express');
const route = express.Router();

const UserController = require('../Controller/UserController');
const { authN } = require('../Middleware/auth');
const { imageKit } = require('../Middleware/imageKit');
const user = require('./user');
const film = require('./film');


route.post('/register', imageKit, UserController.register);
route.post('/login', UserController.login);

route.use(authN);
route.use('/users', user);
route.use('/films', film);


module.exports = route;