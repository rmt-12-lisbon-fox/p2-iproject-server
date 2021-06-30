const express = require('express');
const route = express.Router();
const UserController = require('../Controller/UserController');
const { imageKit } = require('../Middleware/imageKit');
const multer = require('multer');
const upload = multer();

route.get('/', UserController.findById);
route.put('/', upload.single('imageUrl'), imageKit, UserController.updateUser);

module.exports = route;