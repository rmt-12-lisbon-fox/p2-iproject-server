const express = require ('express')
const router = express.Router()
const Controller = require('../controllers/controllerReview.js')
const authFounder = require ('../middlewares/authorizationFounder.js')
const multer = require('multer')
var upload = multer();

router.get('/', Controller.getReviews)

router.post('/', authFounder, upload.single('profilePic'), Controller.createReview) // no middleware, imageKit API langsung di controller

router.get('/:id', Controller.getReviewsById)

module.exports = router