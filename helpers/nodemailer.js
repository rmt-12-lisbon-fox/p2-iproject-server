const nodemailer = require('nodemailer')

const transporter = nodemailer.createTransport({
    service : 'gmail',
    auth : {
        user : 'sanjungliu@gmail.com',
        pass: 'ucdmmrzuwqqhxwfb'
    }
})

const sendMail = (email) => {
    const option = {
        from: '"Go-Exercise-App, Your Coolest Exercise Partner 👻" <no-reply@gmail.com>', 
        to: email, 
        subject: "Reminder of Your Exercise Schedule ✔", 
        text: `Reminder of Your Exercise Schedule ✔`, 
        html: `<b>${message}</b>`, 
    }

    transporter.sendMail(option, (err, info) => {
        if(err) console.error(err)
        console.log(`Reminder sent to : ${email}`)
    })
}

module.exports = sendMail