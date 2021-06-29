const express = require ('express')
const router = express.Router()
const Controller = require('../controllers/controllerReview.js')
const authFounder = require ('../middlewares/authorizationFounder.js')
const authentication = require ('../middlewares/authentication.js')
const adminAuth = require ('../middlewares/authorizationAdmin.js')

router.get('/', Controller.getReviews)
router.get('/:id', Controller.getReviewsById)
router.get('/translate/:id', Controller.translate)

router.use(authentication)

router.post('/', authFounder, Controller.createReview) // no middleware, imageKit API langsung di controller OK

router.patch('/verify/:id', adminAuth, Controller.verifyReview) // OK

router.patch('/like/:id', Controller.addLikes) // Ok

module.exports = router