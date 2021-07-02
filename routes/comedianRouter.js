const router = require('express').Router()
const ComedianController = require('../controllers/comedianController')

router.get('/', ComedianController.findAllComedians)
router.get('/:id', ComedianController.findComedianById)
router.post('/', ComedianController.createComedian)

module.exports = router