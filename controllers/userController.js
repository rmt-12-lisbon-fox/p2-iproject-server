const { Destination, MyDestination, User } = require('../models');
const bcrypt = require('../helpers/bcrypt');
const jwt = require('jsonwebtoken');
const nodemailer = require('nodemailer');

class Controller {
    static register(req, res, next) {
        const { email, password } = req.body
        User.create({
            email,
            password
        })
            .then(result => {

                res.status(201).send({
                    id: result.id,
                    email: result.email
                })
            })
            .catch(err => {
                console.log("error register")
                next(err)
            })

    }

    static login(req, res, next) {
        const { email, password } = req.body;

        User.findOne({
            where: {
                email
            }
        })
            .then(result => {
                if (result) {
                    if (bcrypt.checkPassword(password, result.password)) {
                        let token = jwt.sign({ id: result.id, email: result.email }, process.env.secret);

                        res.status(200).send({ access_token: token })
                    } else {
                        next({ code: 401, message: "email / password is wrong" })
                    }

                } else {
                    next({ code: 401, message: "email / password is wrong" })
                }

            })
            .catch(err => {
                next(err)
            })

    }

    static share(req,res,next){
        const {email,name} = req.body
        
        
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
              user: 'safetravel13579@gmail.com',
              pass: process.env.nodemailerpass //
            }
          });
          
          const mailOptions = {
            from: 'safetravel13579@gmail.com',
            to: email,
            subject: 'Travel Place Recomendation',
            text: `Your friend has send a recommendation for vacation to ${name}`
          };
          
          transporter.sendMail(mailOptions, function(error, info){
            if (error) {
              console.log(error);
              next(error)
            } else {
              console.log('Email sent: ' + info.response);
              res.status(200).send({message : 'Email sent: ' + info.response})
            
            }
          });
    }
}

module.exports = Controller;