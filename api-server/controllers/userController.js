const { User } = require('../models')
const { comparePassword } = require('../helpers/bcrypt')
const { generateToken } = require('../helpers/jwt')
const { OAuth2Client } = require('google-auth-library')

class Controller {
  static loginDoctor (req, res, next) {
    User
      .findOne({
        where: {
          email: req.body.email
        }
      })
      .then(data => {
        if (data) {
          if (comparePassword(req.body.password, data.password)) {
            const access_token = generateToken({ id: data.id, email: data.email, role: data.role})
            res.status(200).json({ access_token })
          } else {
            next({ code: 401, message: 'Invalid email or password' })
          }
        } else {
          next({ code: 401, message: 'Invalid email or password' })
        }
      })
      .catch(err => {
        if (err.name === 'SequelizeValidationError') {
          const errors = err.errors.map(el => el.message)
          next({ code: 400, message: errors.join(' ')})
        } else {
          console.log(err)
          next({ code: 500 })
        }
      })
  }

  static loginGoogle (req, res, next) {
    const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID)
    let payload = null
    let profilePic = null
    console.log(process.env.GOOGLE_CLIENT_ID)
    client.verifyIdToken({
        idToken: req.body.id_token,
        audience: process.env.GOOGLE_CLIENT_ID
    }).then(ticket => {
        payload = ticket.getPayload()
        console.log(payload)
        profilePic = payload.picture
        return User.findOne( {
            where : {
                email: payload.email
            }
        })
    })
    .then(dataUserFound => {
        if (dataUserFound) {
            return dataUserFound
        } else {
            return User.create({
                email: payload.email,
                password: process.env.GOOGLE_PASSWORD,
                role: 'user'
            })
        }
    })
    .then(dataUser => {
        const access_token = generateToken({
            id: dataUser.id,
            email: dataUser.email,
            role: dataUser.role
        })
        console.log(access_token)
        res.status(200).json({ access_token, profilePic })
    })
    .catch(err => {
        console.log(err);
        next({code: 500, message: err})
    })
  }
}

module.exports = Controller