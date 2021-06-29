const { User } = require('../models')

class Controller {
    static showUser(req, res, next) {
        User.findAll()
            .then((data) => {
                if (data) {
                    res.status(200).json({ data })
                } else {
                    next({ code: 404, message: 'Not Found' })
                }
            })
            .catch((err) => {
                next({ code: 500, message: err.message })
            })
    }

    static deleteUser(req, res, next) {
        const id = req.body.id
        User.destroy({ where: { id } })
            .then((data) => {
                if (data) {
                    res.status(200).json({ data })
                } else {
                    next({ code: 404, message: 'Not Found' })
                }
            })
            .catch((err) => {
                next({ code: 500, message: err.message })
            })
    }

    static updateUser(req, res, next) {
        const id = req.body.id
        const { fullName, username, email, password, photo, phoneNumber, role } = req.body
        User.update({ fullName, username, email, password, photo, phoneNumber, role }, { where: { id } })
            .then((data) => {
                if (data) {
                    res.status(200).json({ data })
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