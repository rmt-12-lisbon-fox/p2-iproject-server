const { decodeJWt  } = require('../helpers/jwt')
const { User  } = require('../models')


function auth (req, res, next) {
  if (req.headers.access_token) {
    // ada token
    try {
      let payload = decodeJWt(req)
      User.findByPk(+payload.id)
      .then(user => {
        if (user) {
          req.user = user
          console.log(`aman cuy`)
          next()
        } else {
          console.log(`user itu udah gaada`)
          next({ code: 401, message: "authentication failed"})
        }
      })
      .catch(next)
    } catch (error) {
      next({ code: 401, message: "gagal try catch"})
    }
  } else {
    next({ code: 401, message: "you must login first"})
  }
}

module.exports = auth