const jwt = require('jsonwebtoken')

const generateToken = (payload) => {
  return jwt.sign(payload, process.env.TOKEN)
}

const validateToken = (token) => {
  return jwt.verify(token, process.env.TOKEN)
}

module.exports = { generateToken, validateToken }