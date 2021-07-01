const express = require('express')
const router = express.Router()
const AuthController = require('../controllers/authController')
const Controller = require('../controllers/controller')
const authentification = require('../middlewares/authentification')
const errorHandling = require('../middlewares/errorhandling')
const imageKit = require('../middlewares/imageKit')
const multer = require('multer')
const storage = multer.memoryStorage()
const path = require('path')
const upload = multer({ 
  storage: storage,
  fileFilter: function (req, file, cb) {
    var ext = path.extname(file.originalname);
    if(ext !== '.png' && ext !== '.jpg' && ext !== '.jpeg') {
      return cb(new Error('Only images(png,jpg,jpeg) are allowed'))
    }
    cb(null, true)
  },
  limits:{ fileSize: 255000 }
})

router.get('/', Controller.hello) 
router.post('/register', AuthController.register)
router.post('/login', AuthController.login)
router.post('/googlelogin', AuthController.googlelogin)
router.post('/signal', Controller.signal)

router.get('/market', Controller.market)
router.get('/adzan', Controller.adzan)

router.use(authentification)
router.post('/portofolio', Controller.portofolioPOST)
router.put('/portofolio/:id', Controller.portofolioPut)
router.get('/portofolio', Controller.portofolio)
router.get('/bestxrp', Controller.bestxrp)
router.get('/bestbtc', Controller.bestbtc)
router.get('/besteth', Controller.besteth)
router.get('/bestltc', Controller.bestltc)
router.get('/bestdoge', Controller.bestdoge)

router.use(errorHandling)

module.exports = router