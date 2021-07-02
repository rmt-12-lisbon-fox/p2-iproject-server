const bcryptjs = require('bcryptjs')

const hashPassword = (password) => {
  return bcryptjs.hashSync(password, 10)
}

const comparePassword = (password, hashedPassword) => {
  return bcryptjs.compareSync(password, hashedPassword)
}

module.exports = { hashPassword, comparePassword }