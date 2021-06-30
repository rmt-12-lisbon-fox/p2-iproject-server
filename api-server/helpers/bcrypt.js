const bcrypt = require('bcryptjs')

function hashPassword (rawPassword) {
  return bcrypt.hashSync(rawPassword, bcrypt.genSaltSync(10))
}

function comparePassword (rawPassword, hashPassword) {
  return bcrypt.compareSync(rawPassword, hashPassword)
}

module.exports = { hashPassword, comparePassword }