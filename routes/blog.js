const Controller = require('../controllers/controllerBlog')
const router = require('express').Router()
const multer = require('multer')
// const storage = require('../midlewere/imgTamplate')
const upload = multer()
// const upload = multer({ storage: storage })
const toImageKitBlog = require('../midlewere/toImageKitBlog')

router.post('/', upload.single('img'), toImageKitBlog, Controller.addBlog) //admin
router.get('/', Controller.showBlog)
router.get('/:id', Controller.findOneBlog)

module.exports = router