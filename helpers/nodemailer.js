const nodemailer = require('nodemailer')

const transporter = nodemailer.createTransport({
    service: 'hotmail',
    auth: {
        user: 'invitekuy@outlook.co.id',
        pass: 'Lampungselatan1'
    }
})

module.exports = transporter
