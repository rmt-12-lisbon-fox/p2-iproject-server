const router = require ( 'express' ).Router()
const axios = require ( 'axios' )

const questController = require ( '../controllers/questController' )
const userController = require ( '../controllers/userController' )
const authentication = require ( '../middlewares/authentication' )

router.post ( '/register', userController.register )
router.post ( '/login', userController.login )

router.get ( '/quests', questController.read )

router.use ( authentication )
router.post ( '/quests', questController.create )
router.get ( '/quests/:id', questController.findOne )
router.put ( '/quests/:id', questController.update )
router.delete ( '/quests/:id', questController.delete )



module.exports = router