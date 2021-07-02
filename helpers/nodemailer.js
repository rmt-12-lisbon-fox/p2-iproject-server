const nodemailer = require('nodemailer')

const transporter = nodemailer.createTransport({
    service: 'hotmail',
    auth: {
        user: 'untukaplikasi@outlook.com',
        pass: 'Hacktiv8'
    }
})

module.exports = transporter