const { User } = require('../models')
const { verifyToken } = require('../helpers/jwt')

function authentication (req, res, next) {
  if (req.headers.access_token) {
    try {
      const payload = verifyToken(req.headers.access_token)
      User
        .findByPk(payload.id)
        .then(data => {
          if (data) {
            req.loggedInUser = { id: data.id, email: data.email, role: data.role }
            next()
          } else {
            next({ code: 401, message: 'Invalid or wrong JWT' })
          }
        })
    } catch(err) {
      next({ code: 401, message: 'Invalid or wrong JWT' })
    }
  } else {
    next({ code: 401, message: 'Please login first' })
  }
}

module.exports = authentication