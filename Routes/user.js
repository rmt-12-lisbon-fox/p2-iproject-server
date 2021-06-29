const express = require('express');
const route = express.Router();
const UserController = require('../Controller/UserController');
const { imageKit } = require('../Middleware/imageKit');

route.get('/', UserController.findById);
route.put('/', imageKit, UserController.updateUser);

module.exports = route;