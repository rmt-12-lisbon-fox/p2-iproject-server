const axios = require('axios')
const { key, videoData } = require('./listVideo')
const { User, Program, Schedule, Reminder } = require('./models')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const cron = require('node-cron')
const nodemailer = require('nodemailer')

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
        let message = `Hi ${username}, you have schedule to do ${programTitle} today. Cheers!`
        let email = req.user.email

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

        Schedule.create({ ProgramId, UserId, intensity })
        .then(data => {

            if(intensity == 'Low') {
                cron.schedule('*/3 * * * *', () =>  {
                    sendMail(email)
                   
                    console.log('running a task every three minute');
                    Reminder.create({ message, UserId })
                    .then( data => {
                        console.log(data, `ini data create reminder dari Controller <<<<<<<<<<`)
                    })
                    .catch( err => {
                        console.log(err, `ini err create reminder dari Controller <<<<<<<<<`)
                    })
                  }, {
                    timezone: "Asia/Jakarta"
                  });
            } else if(intensity == 'Moderate') {
                cron.schedule('*/1 * * * *', () =>  {
                    sendMail(email)
                   
                    console.log('running a task every two minute');
                    Reminder.create({ message, UserId })
                    .then( data => {
                        console.log(data, `ini data create reminder dari Controller <<<<<<<<<<`)
                    })
                    .catch( err => {
                        console.log(err, `ini err create reminder dari Controller <<<<<<<<<`)
                    })
                  }, {
                    timezone: "Asia/Jakarta"
                  });
            } else if(intensity == 'High') {
                cron.schedule('*/30 * * * * *', () =>  {
                    sendMail(email)

                    console.log('running a task every minute');
                    Reminder.create({ message, UserId })
                    .then( data => {
                        console.log(data, `ini data create reminder dari Controller <<<<<<<<<<`)
                    })
                    .catch( err => {
                        console.log(err, `ini err create reminder dari Controller <<<<<<<<<`)
                    })
                  }, {
                    timezone: "Asia/Jakarta"
                  });
            }
            setTimeout(() => {
                cron.stop()
            }, 50000000);
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
        console.log(req.body, `masuk delete schedule`)
        let { id } = req.body
        Schedule.destroy({ where : { id }})
        .then( data => {
            if (data) {
                console.log(`sukses hapus schedule <<<<<<<<`)
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
}

module.exports = Controller