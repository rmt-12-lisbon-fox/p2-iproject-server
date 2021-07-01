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
                return user
            } else {
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

}

module.exports = userController