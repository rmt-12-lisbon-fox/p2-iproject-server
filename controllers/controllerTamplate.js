const { Tamplate } = require('../models')

class Controller {
    static creteTamplate(req, res, next) {
        const imgT = req.image[0]
        const imgL = req.image[1]
        const imgR = req.image[2]
        const imgB = req.image[3]
        const version = req.body
        Tamplate.create({ version, imgT, imgL, imgR, imgB })
            .then((data) => {
                res.status(201).json({ data })
            })
            .catch((err) => {
                next({ code: 500, message: err.message })
            })
    }

    static showTamplate(req, res, next) {
        Tamplate.findAll()
            .then((data) => {
                if (data) {
                    res.status(200).json(data)
                } else {
                    next({ code: 404, message: 'Not Found' })
                }
            })
            .catch((err) => {
                next({ code: 500, message: err.message })
            })
    }

    static findById(req, res) {
        const id = req.params.id
        Tamplate.findOne({ where: { id } })
            .then((data) => {
                if (data) {
                    res.status(200).json(data)
                } else {
                    next({ code: 404, message: 'Not Found' })
                }
            })
            .catch((err) => {
                next({ code: 500, message: err.message })
            })
    }

    static deleteTamplate(req, res, next) {
        const id = req.body.id
        Tamplate.destroy({ where: { id } })
            .then((data) => {
                if (data) {
                    res.status(200).json(data)
                } else {
                    next({ code: 404, message: 'Not Found' })
                }
            })
            .catch((err) => {
                next({ code: 500, message: err.message })
            })
    }

    static updateTamplate(req, res, next) {
        const id = req.body.id
        const { version, nameMF, addressAndDate } = req.body
        Tamplate.update({ version, nameMF, addressAndDate }, { where: { id } })
            .then((data) => {
                if (data) {
                    res.status(200).json(data)
                } else {
                    next({ code: 404, message: 'Not Found' })
                }
            })
            .catch((err) => {
                next({ code: 500, message: err.message })
            })
    }
}

module.exports = Controller