const {jwtCreate, jwtCheck} = require('../helpers/jwt')
const {User} = require('../models')

function authentication(req, res, next) {
    if(req.headers.access_token) {
        try {
            const {id, username} = jwtCheck(req.headers.access_token)
            User.findByPk(id)
        } catch (error) {
            next({code: 401, msg: 'Invalid JWT token'})
        }
    } else {
        next({code:401, msg:'Access token not found'})
    }
}

// buat profile, edit delete deck
function authorization(req, res, next) {

}

module.exports = {
    authentication, 
    authorization
}