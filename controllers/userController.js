const { User } = require('../models/index')
const { checkHash } = require('../helpers/bcrypt')
const { generateJWT } = require('../helpers/jwt')

class userController {

    static googleAuth(req, res, next) {
        let googleData
        const { OAuth2Client } = require("google-auth-library");
        const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);
        client.verifyIdToken({
            idToken: req.body.id_token,
            audience: process.env.GOOGLE_CLIENT_ID
        })
        .then( ticket => {
            const payload = ticket.getPayload();
            googleData = payload
            return User.findOne({
                where : {
                    email : payload.email
                }
            })
        })
        .then( user => {
            if (user) {
                // jika email google tsb sdh ada maka kasih JWT
                // masih bingung kenapa return user, padahal user bukan promise
                return user
            } else {
                let role
                
                return User.create({
                    username: googleData.name,
                    email: googleData.email,
                    password: "default_password",
                })
            }
        })
        .then( (user) => {
            const accessToken = generateJWT({
                id : user.id,
                email : user.email,
                role : user.role
            })

            res.status(200).json({ "access_token" : accessToken, "bigData" : googleData, "DB-Data" : user})
        })
        .catch( err => {
            next(err)
        })

    }

    static login(req, res, next) {
        User.findOne({
            where: {
                email: req.body.email
            }
        })
        .then( DBData => {
            if (DBData) {
                // found the inputted email
                let result = checkHash(req.body.password, DBData.password)
                if (result === true) {
                    // give JWT
                    const accessToken = generateJWT({
                        id : DBData.id,
                        email : req.body.email,
                        role : req.body.role
                    })
                    res.status(200).json({"access token" : accessToken, "DB-Data" : DBData})
                } else {
                    next({code : 401, message: "invalid email or password"})
                }
            } else {
                next({code : 401, message: "invalid email or password"})
            }
        })
        .catch(err => {
            next(err)
        })
    }

    static addUser(req, res, next) {
        User.create({
            username : req.body.username,
            email : req.body.email,
            password : req.body.password,
            role : "admin",
            phoneNumber : req.body.phoneNumber,
            address : req.body.address
        }).then(data => {
            let {id, email} = data
            res.status(201).json({id: id, email: email})
        }).catch(err => {
            next(err)
        })
    } 

}

module.exports = userController