function authFounder(req, res, next) {
    const { Founder } = require('../models')

    if (req.loggedUser.active_status == true) {
        next()        
    } else {
        next({ code: 403, message: 'Please verify your account (email address) first' })
    }
}


module.exports = authFounder