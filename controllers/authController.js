const {User} = require('../models')
const {jwtCreate} = require('../helpers/jwt')

class AuthController {
    static async postRegister(req, res, next) {
        const {username, email, password} = req.body
        try {
            const newUser = await User.create({username, email, password})
            console.log(newUser)
            try {
                const access_token = jwtCreate({id: newUser.id, username: newUser.username,})
                res.status(201).json({id: newUser.id, username: newUser.username, access_token})
            } catch {
                console.log('JWT Error')
                next({code:500})
            }
        } catch (error) {
            // bad request
            // console.log(error)
            console.log(error.message)
            // next({code:400, msg:''})
        }
        
    }
    static postLogin(req, res, next) {

    }
    static getProfile(req, res, next) {
        
    }
}
module.exports = AuthController