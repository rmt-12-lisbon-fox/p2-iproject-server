const {User} = require('../models');
const { comparePassword } = require('../helpers/bcrypt');
const {generateJWT} = require('../helpers/jwt');
const { OAuth2Client } = require("google-auth-library");
let payload

class Controller {
    static register(req,res,next) {
        User.create({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            password: req.body.password,
        })
        .then(user => {
            res.status(201).json({
                id: user.id,
                email: user.email
            })
        })
        .catch(err => {
            if(err.name === "SequelizeUniqueConstraintError") {
                res.status(400).json({message: "E-mail already registered"})
            } else if(err.name === "SequelizeValidationError") {
                let errMsg = []
                err.errors.forEach(e => {
                    errMsg.push(e.message)
                });
                res.status(400).json(errMsg)
            } else {
                res.status(500).json({message: err.meesage})
            }
        })
    }

    static login(req,res,next) {
        const email = req.body.email
        const password = req.body.password

        User.findOne({
            where: {
                email: email
            }
        })
        .then(user => {
            if(user) {
                if(comparePassword(password, user.password)) {
                    const access_token = generateJWT({
                        id: user.id,
                        email: user.email
                    })
                    
                    res.status(200).json({ access_token, id:user.id, firstName: user.firstName, lastName: user.lastName })
                } else {
                    res.status(401).json({message: "Wrong email or password"})
                    
                }
            } else {
                res.status(401).json({message: "Wrong email or password"})
                
            }
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({ message: err.message})
        })
    }

    static loginGoogle(req,res,next) {
        const client = new OAuth2Client(process.env.GOOGLE_ID);
        client.verifyIdToken({
        idToken: req.body.idToken,
        audience: process.env.GOOGLE_ID,
        })
        .then(ticket => {
            payload = ticket.getPayload();
            console.log(payload, '<<<<<<< PAYLOAD');

            return User.findOne({
                where: {
                    email: payload.email
                }
            })
        })
        .then(data => {
            if(data) {

                const access_token = generateJWT({
                    id: data.id,
                    email: data.email
                })
                
                res.status(200).json({ access_token, id:data.id, firstName: data.firstName, lastName: data.lastName })
            } else {
                User.create({
                firstName: payload.name,
                lastName: payload.name,
                email: payload.email,
                password: process.env.PASSWORD_GOOGLE,
               })
               .then(data => {

                    const access_token = generateJWT({
                        id: data.id,
                        email: data.email
                    })
                   res.status(200).json({ access_token, id:data.id, firstName: data.firstName, lastName: data.lastName })
               })
               .catch(err => {
                //    console.log(err);
                res.status(500).json({ meesage: err.message})
               })
            }
        })
        .catch(err => {
            // console.log(err);
            res.status(500).json({ meesage: err.message})
        })
    }
}

module.exports = Controller