const jwt = require('jsonwebtoken')

function generateToken(payload) {
  return jwt.sign(payload,process.env.JWT_TOKEN)
}

function verifyToken(payload){
  return jwt.verify(payload,process.env.JWT_TOKEN)
}

module.exports = {generateToken,verifyToken}