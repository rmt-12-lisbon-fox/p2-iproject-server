const express = require('express')
const router = express.Router()
const controller = require('../controllers/destinationController');
const auth = require('../middlewares/auth');

router.post('/citiesdestination', controller.getCityDestination)

router.post('/countriesposition', controller.getCountriesPosition)

// router.get('/countrydetail', controller.getCountryDetail)

// router.get('/travelplaces', controller.getTravelPlaces)

router.post('/destinationinfo', controller.getdestinationinfo)

router.use(auth.authe)

router.post('/bookmark', controller.addBookmark)

router.get('/bookmark', controller.getBookmark)

router.use('/bookmark/:id',auth.autho)

router.delete('/bookmark/:id', controller.deleteBookmark)

module.exports = router;