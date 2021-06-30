const Controller = require('../controllers/controllerInvite')
const { route } = require('./tamplateRouter')
const router = require('express').Router()

router.post('/', Controller.creteInvite)
router.get('/', Controller.showInvite)
router.get('/:id', Controller.findOne)
router.post('/generateLink', Controller.generateLink)
router.delete('/:id', Controller.deleteInvite)
router.put('/:id', Controller.updateInvite)


module.exports = router