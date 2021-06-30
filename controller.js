const axios = require('axios')
const { key, videoData } = require('./listVideo')
const { User, Program, Schedule } = require('./models')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

class Controller {
    static fetchVideo(req, res) {
        axios({
            url : `https://www.googleapis.com/youtube/v3/videos?id=xRt4LSANIoU&key=${key}&part=snippet&fields=items(id,snippet(title,thumbnails(medium)))`,
            method : `get`,
        })
        .then( ({data}) => console.log(data, `ini data fetch video`))
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
        .then( data => {
            res.status(201).json({id : data.id, email : data.email})
        })
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
        Program.findAll()
        .then(data => {
            res.status(200).json(data)
            console.log(data, `ini data fetch program`)
        })
        .catch(err => res.status(500).json({message : `internal server error`}))
    }
    
    static createSchedule(req, res) {
        let { ProgramId, intensity } = req.body
        let UserId = req.user.id

        Schedule.create({ ProgramId, UserId, intensity })
        .then(data => {
            res.status(201).json(data)
            console.log(data, `ini data create schedule`)
        })
        .catch(err => {
            res.status(500).json({message : `internal server error`})
            console.log(err, `ini err create schedule`)
        })
    }

    static fetchSchedule(req, res) {
        let UserId = req.user.id
        User.findByPk(UserId, { include : Program})
        .then(data => {
            res.status(200).json(data.Programs)
            console.log(data.Programs, `ini data dari fetch my program`)
        })
        .catch(err => {
            console.log(err, `ini error dari fetch my program`)
        })
    }

    static programDetail(req, res) {
        let id = req.params.id
        Program.findByPk(id)
        .then(data => {
            res.status(200).json(data)
            console.log(data, `ini data detail program`)
        })
        .catch(err => {
            console.log(err, `ini err detail program`)
        })
    }

}

module.exports = Controller