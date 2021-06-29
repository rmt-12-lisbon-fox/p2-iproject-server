const Controller = require('../controllers/controllerUser')
const router = require('express').Router()

// router.post('/',Controller.creteUser) ini nnti masuk ke register
router.get('/', Controller.showUser)
router.delete('/:id',Controller.deleteUser)
router.put('/:id',Controller.updateUser)


module.exports = router