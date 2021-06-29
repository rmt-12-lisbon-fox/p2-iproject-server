const express = require ('express')
const router = express.Router()
const Controller = require('../controllers/controllerReview.js')
const authFounder = require ('../middlewares/authorizationFounder.js')
const authentication = require ('../middlewares/authentication.js')
const multer = require('multer')
var upload = multer();

// router.get('/', Controller.getReviews)
// router.get('/:id', Controller.getReviewsById)

router.use(authentication)

// router.post('/', authFounder, upload.single('profilePic'), Controller.createReview) // no middleware, imageKit API langsung di controller

module.exports = router