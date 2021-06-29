const Controller = require('../controllers/controllerAuth')
const router = require('express').Router()
const multer = require('multer')
// const storage = require('../midlewere/imgProfile')
const upload = multer()
const toImageKitProfile = require('../midlewere/toImageKitProfile')

router.post('/register', upload.single('photo'), toImageKitProfile, Controller.register)
router.post('/login', Controller.login)
router.delete('/googlelogin', Controller.googleLogin)


module.exports = router