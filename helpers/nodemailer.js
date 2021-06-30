const nodemailer = require('nodemailer')

const transporter = nodemailer.createTransport({
    service: 'outlook',
    auth: {
        user: 'hangoutgamers247@outlook.co.id',
        pass: 'katasandi11##'
    }
})

module.exports = transporter
