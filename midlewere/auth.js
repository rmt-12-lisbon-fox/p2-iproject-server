const { validateJWT } = require("../helpers/jwt");
const { User } = require('../models')

function authentication(req, res, next) {
    const access_token = req.headers.access_token;

    if (access_token) {
        try {
            const payload = validateJWT(access_token);
            User.findByPk(payload.id)
                .then(user => {
                    if (user) {
                        req.user = { id: user.id, username: user.username, email: user.email, role: user.role, phoneNumber: user.phoneNumber }
                        next()
                    } else {
                        next({ code: 401, message: 'Invalid/Wrong JWT' })
                    }
                })
                .catch(err => {
                    next({ code: 500 })
                })
        } catch {
            next({ code: 401, message: 'Invalid/Wrong JWT' })
        }
    } else {
        next({ code: 401, message: 'Please Login First' })
    }
}

function authorization(req, res, next) {

}

module.exports = { authentication, authorization }