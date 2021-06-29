function authentication(req, res, next) {
    const { Founder } = require('../models')
    let verifyJwt = require('../helpers/jwt.js').verifyJwt

    let accessToken = req.headers.accesstoken

    if (accessToken && accessToken !== 'undefined') { // if already logged-in
        try {
            let payload = verifyJwt(accessToken)

            Founder.findByPk(payload.id)
            .then(loggedUser => { // if user is valid
                if (loggedUser) {
                    req.loggedUser = loggedUser // saved as object
                    next()
                } else { // if user is not valid (removed, etc.)
                    next({ code: 401, message: 'Invalid User / Login Credentials' })
                }
            })
            .catch(err => {
                next({ code: 500, message: `${err.message}` })
            })    
        } catch(err) {
            next({ code: 401, message: 'Invalid User / Login Credentials' })
        } 
    } else {
        next({ code: 401, message: 'Please login first' })
    }
}

module.exports = authentication