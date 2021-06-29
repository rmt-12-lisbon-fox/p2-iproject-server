const { User } = require('../models')
const { comparePassword } = require('../helpers/bcryptjs')
const { generateToken } = require('../helpers/jwt')

class UserController {
  static register(req, res) {
    User.create({
      email: req.body.email,
      password: req.body.password
    })
      .then(user => {
        res.status(201).json(user)
      })
      .catch(err => {
        if (err.name === 'SequelizeUniqueConstraintError') {
          let error = [ err.errors[0].message ]

          res.status(400).json(error)
        } else if(err.name === 'SequelizeValidationError') {
          let errors = []

          err.errors.forEach(error => {
            errors.push(error.message)
          })

          res.status(400).json(errors)
        } else {
          res.status(500).json({ message: err.message })
        }
      })
  }
  static login(req, res) {
    let email = req.body.email
    let password = req.body.password

    User.findOne({
      where: {
        email
      }
    })
      .then(user => {
        if(user) {
          if(comparePassword(password, user.password)) {
            let access_token = generateToken({
              id: user.id,
              email: user.email
            })

            res.status(200).json({ access_token })
          } else {
            res.status(401).json({ message: 'Invalid email/password' })
          }
        } else {
          res.status(401).json({ message: 'Invalid email/password' })
        }
      })
      .catch(err => {
        res.status(500).json({ message: err.message })
      })
  }
}

module.exports = UserController