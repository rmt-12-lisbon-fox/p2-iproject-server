const jwt = require('jsonwebtoken')

function generateToken(payload) {
  return jwt.sign(payload,'rahasia')
}

function verifyToken(payload){
  return jwt.verify(payload,'rahasia')
}

module.exports = {generateToken,verifyToken}