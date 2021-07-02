const Controller = require('../controllers/controllerTamplate')
const router = require('express').Router()
const multer = require('multer')
// const storage = require('../midlewere/imgTamplate')
const upload = multer()
// const upload = multer({ storage: storage })
const toImageKit = require('../midlewere/toImageKit')

router.post('/', upload.array('img', 4), toImageKit, Controller.creteTamplate)
router.get('/', Controller.showTamplate)
router.get('/:id', Controller.findById)
router.delete('/:id', Controller.deleteTamplate)
router.put('/:id', Controller.updateTamplate)


module.exports = router