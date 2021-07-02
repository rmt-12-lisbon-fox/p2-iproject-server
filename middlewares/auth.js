const { validateToken } = require('../helpers/jwt')
const { User } = require('../models')

const authentication = (req, res, next) => {
  const access_token = req.headers.access_token

  if(access_token) {
    try {
      const payload = validateToken(access_token)

      User.findByPk(payload.id)
        .then(user => {
          if(user) {
            req.user = { id: user.id }
            next()
          } else {
            res.status(404).json({ message: 'User not found' })
          }
        })
    } catch(err) {
      res.status(403).json({ message: 'Authentication failed' })
    }
  } else {
    res.status(401).json({ message: 'Login first!' })
  }
}

module.exports = { authentication }