const { Music } = require('../models')

class Controller {
    static addMusic(req, res, next) {
        const { title, musicUrl } = req.music
        Music.create({ title, musicUrl })
            .then(data => {
                res.status(201).json(data)
            })
            .catch(err => {
                res.status(500).json('internal server error')
            })
    }
    static findAll(req, res, next) {
        Music.findAll()
            .then(data => {
                res.status(200).json(data)
            })
            .catch(err => {
                console.log('err');
                res.status(500).json('internal server error')
            })
    }
}

module.exports = Controller