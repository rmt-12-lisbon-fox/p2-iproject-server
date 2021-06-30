const { Invite, Tamplate, User, InviteMusic, Music } = require('../models')
const axios = require('axios')
const BitlyClient = require('bitly').BitlyClient;
const bitly = new BitlyClient('cee8ee8c3c98e3ed82f52f4444de6b3215141024');

class Controller {
    static creteInvite(req, res, next) {
        let dataInvite = {}
        const UserId = req.user.id
        const { nameMale, nameFemale, loveStory, dateAkad, addressAkad, dateReception, addressReception, TamplateId, MusicId } = req.body
        Invite.create({ nameMale, nameFemale, loveStory, dateAkad, addressAkad, dateReception, addressReception, UserId, TamplateId })
            .then((data) => {
                console.log(data);
                const InviteId = data.id
                dataInvite = data
                return InviteMusic.create({ InviteId, MusicId })
            })
            .then((dataInviteMusic) => {
                res.status(200).json({ dataInvite, dataInviteMusic })
            })
            .catch((err) => {
                console.log(err);
                next({ code: 500, message: err.message })
            })
    }

    static showInvite(req, res, next) {
        const UserId = req.user.id
        Invite.findAll({ include: [User, Tamplate], where: { UserId } })
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

    static findOne(req, res, next) {
        const id = req.params.id
        Invite.findOne({ include: [User, Tamplate, Music], where: { id } })
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

    static async generateLink(req, res, next) {
        try {
            console.log(req.body.payload);
            const response = await bitly.shorten(req.body.payload);
            res.status(201).json(response.link)
        } catch (err) {
            if (err.message) {
                next({ code: 400, message: err.message })
            } else {
                next({ code: 500, message: err.message })
            }
        }

    }
}

module.exports = Controller