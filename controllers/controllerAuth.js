const { generateJWT } = require('../helpers/jwt')
const { comparePassword } = require('../helpers/bcrypt')
const { OAuth2Client } = require('google-auth-library');
const { User } = require('../models')
const transporter = require("../helpers/nodemailer")

class Controller {
    static register(req, res, next) {
        const photo = req.image
        const { fullName, username, email, password, role, phoneNumber } = req.body
        User.create({ fullName, username, email, password, photo, role, phoneNumber })
            .then((data) => {
                const option = {
                    from: 'invitekuy@outlook.co.id',
                    to: email,
                    subject: 'Register success',
                    text: `Halo ${username}. Selamat ${email} telah register di invitekuy undangan digital online`
                }

                transporter.sendMail(option, function (err, info) {
                    if (err) {
                        console.log(err);
                        return
                    }
                    console.log("Sent: " + info.response);
                })
                res.status(201).json(data)
            })
            .catch(err => {
                if (err.name === "SequelizeValidationError") {
                    let errors = []
                    err.errors.forEach(e => {
                        errors.push(e.message)
                    });
                    res.status(403).json({ message: errors })
                } else {
                    res.status(500).json({ message: 'Internal Servet Error' })
                }
            })
    }

    static login(req, res, next) {
        console.log(req.body);
        const { email, password } = req.body
        User.findOne({ where: { email } })
            .then(user => {
                if (user) {
                    if (comparePassword(password, user.password)) {
                        const access_token = generateJWT({
                            id: user.id,
                            email: user.email
                        })
                        res.status(200).json({ access_token, email: user.email, id: user.id, username: user.username })
                    } else {
                        next({ code: 401, message: 'Wrong Email/Password' })
                    }
                } else {
                    console.log('masuk');
                    next({ code: 401, message: 'Wrong Email/Password' })
                }
            })
            .catch(err => {
                res.status(500).json(err)
            })
    }

    static googleLogin(req, res, next) {
        console.log('masuk');
        // daftar dulu ke integrating goole login
        const client = new OAuth2Client(process.env.GOOGLE_CLIENTID);
        let payload = null;
        client.verifyIdToken({
            idToken: req.body.id_token,
            audience: process.env.GOOGLE_CLIENTID,  // Specify the CLIENT_ID of the app that accesses the backend
            // Or, if multiple clients access the backend:
            //[CLIENT_ID_1, CLIENT_ID_2, CLIENT_ID_3]
        })
            .then((ticket) => {
                payload = ticket.getPayload();
                return User.findOne({
                    where: {
                        email: payload.email
                    }
                })
            })
            .then((foundUser) => {
                console.log(payload, '>>>>>');
                if (foundUser) {
                    // const access_token = generateJWT({
                    //     id: foundUser.id,
                    //     email: foundUser.email
                    // })
                    // res.status(200).json({access_token})
                    return foundUser
                } else {
                    return User.create({
                        fullName: payload.name,
                        photo: payload.picture,
                        email: payload.email,
                        password: process.env.GOOGLE_PASSWORD,
                        role: 'customer',
                        phoneNumber: 'Input Your phone number',
                    })

                }
            })
            .then((user) => {
                const access_token = generateJWT({
                    id: user.id,
                    email: user.email
                })
                res.status(201).json({ access_token, email: user.email, id: user.id, username: user.username })
            })
            .catch((err) => {
                next({ code: 500, message: err.message })
            })
    }
}

module.exports = Controller