const express = require('express');
const route = express.Router();

const UserController = require('../Controller/UserController');
const { authN } = require('../Middleware/auth');
const { imageKit } = require('../Middleware/imageKit');
const multer = require('multer');
const upload = multer();
const user = require('./user');
const film = require('./film');
const review = require('./review');


route.post('/register', upload.single('imageUrl'), imageKit, UserController.register);
route.post('/login', UserController.login);

route.use(authN);
route.use('/users', user);
route.use('/films', film);
route.use('/reviews', review);


module.exports = route;