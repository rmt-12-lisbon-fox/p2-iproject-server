const axios = require('axios')
const { key, videoData } = require('./listVideo')
const { User, Program, Schedule, Reminder } = require('./models')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const sendMail = require('./helpers/nodemailer')
const {OAuth2Client} = require('google-auth-library');


class Controller {
    
    static fetchVideo(req, res) {
        
        axios({
            url : `https://www.googleapis.com/youtube/v3/videos?id=xRt4LSANIoU&key=${key}&part=snippet&fields=items(id,snippet(title,thumbnails(medium)))`,
            method : `get`,
        })
        .then( ({data}) => res.send(data))
        .catch(err => console.log(err, `ini error dari fetch`))
    }

    static postToDatabase(req, res) {
        for (let i = 0 ; i < videoData.length ; i++) {

            axios({
                url : `https://www.googleapis.com/youtube/v3/videos?id=${videoData[i].id}&key=${key}&part=snippet&fields=items(id,snippet(title,thumbnails(medium)))`,
                method : `get`,
            })
            .then( ({data}) => {
                let videoId = `https://www.youtube.com/embed/${data.items[0].id}` 
                let title = data.items[0].snippet.title
                let thumbnail = data.items[0].snippet.thumbnails.medium.url
                let type = videoData[i].type
                Program.create({ videoId, title, thumbnail, type })
                .then( succeed => console.log(succeed, `ini berhasil post ke database`))
                .catch( err => console.log(err, `ini gagal post ke database`))
                
            })
            .catch(err => console.log(err, `ini error dari fetch`))
        }
    }

    static register(req, res) {
        let { username, email, password, age, gender } = req.body
        password = bcrypt.hashSync(password, 10)

        User.create({ username, email, password, age, gender } )
        .then( data => res.status(201).json({id : data.id, email : data.email}))
        .catch(err => console.log(err, `ini error register`))
    }

    static login(req, res) {
        let {  email, password } = req.body

        User.findOne({ where : { email }})
        .then( data => {
            if (data) {
                if (bcrypt.compareSync(password, data.password)) {
                    let access_token = jwt.sign({ id: data.id, email : data.email}, 'rahasia')
                    res.status(200).json({access_token, id : data.id, username : data.username, age:data.age })
                } else {
                    res.status(401).json({ message : `wrong email/pasword`})
                }
            } else {
                res.status(401).json({ message : `wrong email/pasword`})
            }
        })
        .catch(err => res.status(500).json({message : `internal server error`}))
    }

    static googleLogin(req, res, next) {
        let payload
        const client = new OAuth2Client('832054159268-ii58a2oalrdov85rqm5c2jg4eoi53uci.apps.googleusercontent.com')
        client.verifyIdToken({
            idToken: req.body.id_token,
            audience: '832054159268-ii58a2oalrdov85rqm5c2jg4eoi53uci.apps.googleusercontent.com'
        })
        .then( ticket => {
            payload = ticket.getPayload()
            return User.findOne( {where : { email : payload.email }})
        })
        .then( foundUser => {
            if (foundUser) {
               return foundUser
            } else {
              return User.create({ 
                    username : payload.name, 
                    email : payload.email, 
                    password : 'rahasia',
                })
            }
        })
        .then(user => {
            let access_token = jwt.sign({
                id : user.id,
                email : user.email
            }, 'rahasia')
            res.status(200).json({ access_token, username: user.username })
        })
        .catch(err => next(err) )
    }

    static fetchPrograms(req, res) {
       
        
        if(req.query.filter) {
            let filter = req.query.filter
            Program.findAll({ where : { type : filter}})
            .then(data => res.status(200).json(data))
            .catch(err => res.status(500).json({message : `internal server error`}))
        } else {
            Program.findAll()
            .then(data => res.status(200).json(data))
            .catch(err => res.status(500).json({message : `internal server error`}))
        }
    }
    
    static createSchedule(req, res) {
        let { ProgramId, intensity, programTitle } = req.body
        let UserId = req.user.id
        let username = req.user.username
        let link = `<a href="http://localhost:8080/detail">Link</a>`
        
        let messageReminder = `Hi ${username}, just reminds you, you have a schedule to do "${programTitle}" in next 2 hours. Cheers!`
        let messageEmail = `Hi ${username}, just reminds you, you have a schedule to do "${programTitle}" in next 1 hour. Here's the ${link} to the exercise video. Cheers!`
        let email = req.user.email

        var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute:'numeric' };
        let dateFormatted  = new Date(intensity);
        dateFormatted = dateFormatted.toLocaleDateString("en-US", options)
        let message = `Thank You ${username}, you have scheduled to do "${programTitle}" at ${dateFormatted}. Cheers!`

        let beforeSchedule = new Date(intensity)
        beforeSchedule.setHours( beforeSchedule.getHours() - 2)
        let afterSchedule = new Date(intensity)
        afterSchedule.setHours( afterSchedule.getHours() + 1)

        const schedule = require('node-schedule')
        const nodemailer = require('nodemailer')
        const transporter = nodemailer.createTransport({
            service : 'gmail',
            auth : { user : 'sanjungliu@gmail.com', pass: 'ucdmmrzuwqqhxwfb' }
        })
        const sendMailNotification = (email) => {
            const option = {
                from: '"Go-Exercise-App, Your Coolest Exercise Partner 👻" <no-reply@gmail.com>', 
                to: email,
                subject: "Confirmation of Exercise Schedule ✔", 
                text: `Confirmation of Exercise Schedule ✔`, 
                html: `<b>${message}</b>`, 
            }
            transporter.sendMail(option, (err, info) => { if(err) console.error(err) })
        }
        const sendMailReminder = (email) => {
            const option = {
                from: '"Go-Exercise-App, Your Coolest Exercise Partner 👻" <no-reply@gmail.com>', 
                to: email, 
                subject: "Reminder of Your Exercise Schedule ✔", 
                text: `Reminder of Your Exercise Schedule ✔`, 
                html: `<b>${messageEmail}</b>`, 
            }
            transporter.sendMail(option, (err, info) => { if(err) console.error(err) })
        }

        Schedule.create({ ProgramId, UserId, intensity : dateFormatted })
        .then(data => {

            const jobDelete = schedule.scheduleJob(afterSchedule, function(){
                console.log(`masuk after schedule`)
                Schedule.destroy({ where : {id : data.id }})
                .then( data => console.log(data))
                .catch( err => console.log(err, `ini err delete schedule <<<<<<<<<`))
            })
            sendMailNotification(email)
            Reminder.create({ message, UserId })
                .then( data => {})
                .catch( err =>console.log(err, `ini err create reminder dari Controller <<<<<<<<<`))
    
            const job = schedule.scheduleJob(beforeSchedule, function(){
                sendMailReminder(email)
                Reminder.create({ message:messageReminder, UserId })
                .then( data => console.log(data, `ini data create reminder`))
                .catch( err => console.log(err, `ini err create reminder <<<<<<<<<`))
            });
            res.status(201).json(data)
        })
        .catch(err => res.status(500).json({message : `internal server error`}))
    }

    static fetchSchedule(req, res) {
        let UserId = req.user.id
        User.findByPk(UserId, { include : Program})
        .then(data => res.status(200).json(data))
        .catch(err => res.status(500).json({message : `internal server error`}))
    }

    static programDetail(req, res) {
        let id = req.params.id
        Program.findByPk(id)
        .then(data => res.status(200).json(data))
        .catch(err => res.status(500).json({message : `internal server error`}))
    }

    static deleteSchedule(req, res) {
        let id = req.params.id
        Schedule.destroy({ where : { id }})
        .then( data => {
            if (data) {
                res.status(200).json({ message : `succeed delete schedule`})
            } else {
                res.status(500).json({ message : `internal server error`})
            }
        })
        .catch( err => {
            console.log(err, `error hapus schedule <<<<<<<<`)
            res.status(500).json({ message : `internal server error`})
        } )
    }

    static fetchReminder(req, res) {
        let UserId = req.user.id

        Reminder.findAll({ where : { UserId }, order : [['createdAt', 'desc']]})
        .then( data => {
            res.status(200).json(data)
        })
        .catch( err => {
            console.log(err, `ini err reminder dari Controller`)
            res.status(500).json({ message : `internal server error`})
        })
    }

    static createReminder(req, res) {
        let { message } = req.body
        let UserId = req.user.id

        Reminder.create({ message, UserId })
        .then( data => {
            console.log(data, `ini data create dari Controller create reminder`)
        })
        .catch( err => {
            console.log(err, `ini err dari Controller create reminder`)
        })
    }

    static deleteOneReminder(req, res) {
        let id = req.params.id
        Reminder.destroy({ where : { id }})
        .then( data => res.status(200).json({ message : `succeed delete reminder`} ))
        .catch(err => res.status(500).json({ message : `ini error dari delete reminder`}))
    }
}

module.exports = Controller