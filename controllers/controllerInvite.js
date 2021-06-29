const { Invite } = require('../models')

class Controller {
    static creteInvite(req, res, next) {
        // const UserId = req.user.id
        console.log(req.body);
        const UserId = 2
        const { nameMale, nameFemale, loveStory, dateAkad, addressAkad, dateReception, addressReception, TamplateId } = req.body
        Invite.create({ nameMale, nameFemale, loveStory, dateAkad, addressAkad, dateReception, addressReception, UserId, TamplateId })
            .then((data) => {
                if (data) {
                    res.status(200).json({ data })
                } else {
                    next({ code: 404, message: 'Not Valid' })
                }
            })
            .catch((err) => {
                console.log(err);
                next({ code: 500, message: err.message })
            })
    }

    static showInvite(req, res, next) {
        Invite.findAll()
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

    static deleteInvite(req, res, next) {
        const id = req.body.id
        Invite.destroy({ where: { id } })
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

    static updateInvite(req, res, next) {
        const id = req.body.id
        const { nameMale, nameFemale, loveStory, dateAkad, addressAkad, dateReception, addressReception, UserId } = req.body
        Invite.update({ nameMale, nameFemale, loveStory, dateAkad, addressAkad, dateReception, addressReception, UserId }, { where: { id } })
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