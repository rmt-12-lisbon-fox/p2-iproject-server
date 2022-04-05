const { User, History, Deck } = require('../models')
const { jwtCreate } = require('../helpers/jwt')
const { bcryptCheck } = require('../helpers/bcrypt')
// const { Op } = require('sequelize')

class AuthController {
    static async postRegister(req, res, next) {
        const { username, email, password } = req.body
        try {
            const newUser = await User.create({ username, email, password })
            // console.log(newUser)
            try {
                await History.create({
                    UserId: newUser.id,
                    description: `User with id ${newUser.id} has been created`
                })
                // console.log('history has been created')
                const access_token = jwtCreate({ id: newUser.id, username: newUser.username })
                res.status(201).json({ id: newUser.id, username: newUser.username, access_token })
            } catch(err) {
                // console.log(err)
                next({ code: 500 })
            }
        } catch (error) {
            // bad request
            // console.log(error)
            // console.log(error.errors, 'MESSAGEE')
            next(error)
            // next({code:400, msg:''})
        }
    }
    static async postLogin(req, res, next) {
        const { username, email, password } = req.body
        // console.log(req.body)
        let newUser
        try {
            if (email) {
                newUser = await User.findOne({ where: { email } })
            } else if (username) {
                newUser = await User.findOne({ where: { username } })
            }
            if (newUser && bcryptCheck(password, newUser.password)) {
                try {
                    const access_token = jwtCreate({ id: newUser.id, username: newUser.username, })
                    res.status(200).json({ id: newUser.id, username: newUser.username, access_token })
                } catch {
                    // console.log('JWT Error')
                    next({ code: 500 })
                }
            } else {
                // console.log(err)
                next({ code: 400, msg: 'Invalid username/password' })
            }
        } catch (error) {
            // bad request
            // console.log(error)
            next({ code: 500 })
        }
    }
}
module.exports = AuthController