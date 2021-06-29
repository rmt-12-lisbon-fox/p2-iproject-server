const {User} = require('../models')
const {comparePassword} = require('../helpers/bcrypt')
const {generateJWT, verifyJWT} = require('../helpers/jwt')
const {OAuth2Client} = require('google-auth-library')

class AuthController{
  static googlelogin(req, res, next) {
    let payload = null
    const token = req.body.id_token
    const client = new OAuth2Client(process.env.CLIENT_ID);
    client.verifyIdToken({
      idToken: token,
      audience: process.env.CLIENT_ID,   
    })
    .then(ticket => {
      console.log('ini ticket', ticket, `ini ticket`)
      payload = ticket.getPayload()
      const userid = payload[`sub`]
      console.log('ini userid', userid, `ini userid`)
      const email = payload.email
      console.log(email,'{}{}')
      return User.findOne({
        where: {email: payload.email}
      })
    })
    .then(instance => {
      if (instance) {
        console.log(instance, '<><>')
        return instance
      } else {
        const registration = {
          email: payload.email,
          password: `Aa1@${payload.at_hash.split('_').join('').substring(0,5)}`,
          phoneNumber: `0812${payload.sub.substring(9,17)}`,
        }
        console.log(registration)
        return User.create(registration)
      }
    })
    .then(output => {
      console.log('===',output)
      const userInfo = {
        email: output.email,
        phoneNumber: output.phoneNumber,
        id: output.id
      }
      const token = generateJWT(userInfo)
      req.headers.access_token = token
      res.status(200).json({access_token: token})
    })
    .catch(() => next({code:500}))
  }
  static register(req, res, next) {
    const {email, password, phoneNumber} = req.body
    const input = {email, password, phoneNumber}
    User.create(input)
    .then(instance => {
      const registration = {
        email: instance.email,
        phoneNumber: instance.phoneNumber,
        id: instance.id,
      } 
      res.status(201).json(registration)})
    .catch(err => {
      let errors
      if (err.errors) errors = err.errors.flatMap(m => m.message)
      err.errors ? next({code:400, message: errors}) : next({code:500})
    })
  }
  static login(req, res, next) {
    const {email, password} = req.body
    console.log(`dapet email>>>>>>>`, email)
    User.findOne({
      where: {email}
    })
    .then(instance => {
      if (instance) {
        if (comparePassword(password, instance.password)) {
          const userInfo = {
            email: instance.email,
            phoneNumber: instance.phoneNumber,
            id: instance.id
          }
          const token = generateJWT(userInfo)
          req.headers.access_token = token
          res.status(200).json({access_token: token})
        } else next({code:401})
      } else next({code:401})
    })
    .catch(() => next({code:500}))
  }
  static validationAccessToken (req, res, next) {
    const access_token = req.body
    console.log(`dapet token >>>>>>>`, access_token)
    if (access_token.akses) {
      try{
        const payload = verifyJWT(access_token.akses)
        console.log('NAH $$$$$$$$', payload)
        const userInfo = {
          email: payload.email,
          phoneNumber: payload.phoneNumber,
          id: payload.id
        }
        User.findOne({
          where: userInfo})
        .then(valid => res.status(200).json({valid: true}))
        .catch(err => res.status(500).json({message: `access_token harus valid :>`}))
      }
      catch(err) {next({code:401, message: `token JWT not valid ..`})}
    } else next({code:401, message: `please login first..`})
  } 
  static profile(req, res, next) {
    const token = req.headers.access_token
    const userInfo = req.user
    console.log(userInfo)
    if (token) {
      try{ res.status(200).json(userInfo) }
      catch(err) {next({code:401})}
    } else next({code:500})
  }
}

module.exports = AuthController
