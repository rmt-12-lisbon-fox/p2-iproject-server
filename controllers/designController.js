const { Design, Category, User } = require('../models')
const nodemailer = require('nodemailer')

class Controller {
    static findAll(req, res){
        let { page, size } = req.query
        let filter = {}

        if (!page){
            page = 1
        }
        if (!size){
            size = 4
        }
        if (req.query.CategoriesId){
            filter.CategoriesId = +req.query.CategoriesId
        }

        const limit = parseInt(size)
        const offset = (page - 1) * size

        Design.findAndCountAll({
            include: [Category],
            limit,
            offset,
            where: filter
        })
        .then((result) => {
            res.status(200).json(result)
        })
        .catch((err) => {
            res.status(500).json({ message: err.message })
        }) 
    }
    static findSelected(req, res){
        Design.findOne({
            include: [Category, User],
            where: {
                id: +req.params.id
            }
        })
        .then((result) => {
            if (result){
                res.status(200).json(result)
            }
            else {
                // next({ code: 404, message: 'Data not found' })
                res.status(404).json({ message: 'Data not found' })
            }
        })
        .catch((err) => {
            // next({ code: 500, message: err.message })
            res.status(500).json({ message: err.message })
        })
    }
    static findAllMyDesign(req, res){
        Design.findAll({
            where: {
                UsersId: req.user.id
            }
        })
        .then((result) => {
            res.status(200).json(result)
        })
        .catch((err) => {
            res.status(500).json({ message: err.message })
        })
    }
    static addDesign(req, res){
        const input = {
            name: req.body.name,
            description: req.body.description,
            image1: null,
            image2: null,
            image3: null,
            UsersId: req.user.id,
            CategoriesId: req.body.CategoriesId
        }

        if (req.image[0]){
            input.image1 = req.image[0]
        }
        if (req.image[1]){
            input.image2 = req.image[1]
        }
        if (req.image[2]){
            input.image3 = req.image[2]
        }

        Design.create(input)
        .then((result) => {
            res.status(201).json(result)
        })
        .catch((err) => {
            if (err.name === 'SequelizeValidationError'){
                const errMsgs = []

                err.errors.forEach((element) => {
                    errMsgs.push(element.message)
                })
                // next({ code: 400, message: errMsgs })
                res.status(400).json({ message: errMsgs })
            }
            else {
                // next({ code: 500, message: err.message })
                res.status(500).json({ message: err.message })
            }
        })
    }
    static deleteDesign(req, res){
        Design.destroy({
            where: {
                id: +req.params.id
            }
        })
        .then((result) => {
            if (result){
                res.status(200).json({ message: 'Delete Success' })
            }
            else {
                res.status(404).json({ message: 'Data not found' })
            }
        })
        .catch((err) => {
            // next({ code: 500, message: err.message })
            res.status(500).json({ message: err.message })
        })
    }
    static editDesign(req, res){
        const input = {
            name: req.body.name,
            description: req.body.description,
            image1: req.body.image1,
            image2: req.body.image2,
            image3: req.body.image3,
            UsersId: req.user.id,
            CategoriesId: req.body.CategoriesId
        }

        if (req.image[0]){
            input.image1 = req.image[0]
        }
        if (req.image[1]){
            input.image2 = req.image[1]
        }
        if (req.image[2]){
            input.image3 = req.image[2]
        }
        
        Design.update(input, {
            where: {
                id: +req.params.id
            }
        })
        .then(() => {
            res.status(200).json({ message: 'Design Updated' })
        })
        .catch((err) => {
            if (err.name === 'SequelizeValidationError'){
                const errMsgs = []

                err.errors.forEach((element) => {
                    errMsgs.push(element.message)
                })
                // next({ code: 400, message: errMsgs })
                res.status(400).json({ message: errMsgs })
            }
            else {
                // next({ code: 500, message: err.message })
                res.status(500).json({ message: err.message })
            }
        })
    }
    static sendEmail(req, res){
        const input = {
            from: req.body.from,
            to: req.body.to,
            password: req.body.password,
            subject: req.body.subject,
            content: req.body.content
        }

        const transporter = nodemailer.createTransport({
            service: 'hotmail',
            auth: {
                user: input.from,
                pass: input.password
            },
            tls: {
                rejectUnauthorized: false
            }
        })

        const options = {
            from: input.from,
            to: input.to,
            subject: input.subject,
            text: input.content
        }

        transporter.sendMail(options, (err, info) => {
            if (err) {
                res.status(500).json({ message: 'Wrong email or password' })
                return
            }
            else {
                res.status(200).json({ message: 'Email sent!' })
            }
        })
    }
    static sendSms(req, res){
        const accountSid = process.env.ACCOUNT_SID
        const authToken = process.env.AUTH_TOKEN
        const client = require('twilio')(accountSid, authToken)

        client.messages
            .create({
               body: req.body.content,
               from: '+15093090947',
               to: '+6281222110035'
             })
             .then(() => {
                res.status(200).json({ message: 'Message sent!' }) 
             })
            .catch(() => {
                res.status(500).json({ message: 'SMS send unsuccessful' })
            })
    }
}

module.exports = Controller