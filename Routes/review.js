const express = require('express');
const route = express.Router();
const ReviewController = require('../Controller/ReviewController');
const { authZ } = require('../Middleware/auth');

route.post('/', ReviewController.create);

route.get('/', ReviewController.findAll);
route.get('/findByUserId', ReviewController.findByUserId);

route.get('/:id', authZ, ReviewController.findById);
route.put('/:id', authZ, ReviewController.update);
route.delete('/:id', authZ, ReviewController.delete);

module.exports = route;