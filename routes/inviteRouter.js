const Controller = require('../controllers/controllerInvite')
const router = require('express').Router()

router.post('/',Controller.creteInvite)
router.get('/', Controller.showInvite)
router.delete('/:id',Controller.deleteInvite)
router.put('/:id',Controller.updateInvite)


module.exports = router