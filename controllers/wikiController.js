const { Card } = require('../models')
const { Op } = require('sequelize')
const axios = require('axios')
// const Twitter = require('twitter-v2')

class WikiController {
    static async getCard(req, res, next) {
        const cardId = +req.params.cardId
        try {
            const foundCard = await Card.findOne({ where: { cardId } })
            if (foundCard) {
                res.status(200).json(foundCard)
            } else {
                next({ code: 404 })
            }
        } catch (err) {
            console.log(err)
        }
    }
    static async getAllCards(req, res, next) {
        const { page, size, name, type, banlist_info, atk, def, level, linkval, linkmarkers, scale, attribute, race, archetype, card_sets, card_pricesM, card_pricesL } = req.query
        const limit = size ? +size : 8
        const offset = page ? page * limit : 0
        const condition = {}

        // iLike
        name ? condition.name = { [Op.iLike]: `%${name}%` } : null
        type ? condition.type = { [Op.iLike]: `%${type}%` } : null
        banlist_info ? condition.banlist_info = { [Op.iLike]: `%${banlist_info}%` } : null
        attribute ? condition.attribute = { [Op.iLike]: `%${attribute}%` } : null
        race ? condition.race = { [Op.iLike]: `%${race}%` } : null
        archetype ? condition.archetype = { [Op.iLike]: `%${archetype}%` } : null
        linkmarkers ? condition.linkmarkers = { [Op.iLike]: `%${linkmarkers}%` } : null
        card_sets ? condition.card_sets = { [Op.iLike]: `%${card_sets}%` } : null

        // eq
        atk ? condition.atk = { [Op.eq]: `${atk}` } : null
        def ? condition.def = { [Op.eq]: `${def}` } : null
        level ? condition.level = { [Op.eq]: `${level}` } : null
        linkval ? condition.linkval = { [Op.eq]: `${linkval}` } : null
        scale ? condition.scale = { [Op.eq]: `${scale}` } : null

        // numbers
        card_pricesM ? condition.card_prices = { [Op.gte]: `${card_pricesM}` } : null
        card_pricesL ? condition.card_prices = { [Op.lte]: `${card_pricesL}` } : null

        try {
            const cards = await Card.findAll({
                limit,
                offset,
                where: condition
            })
            res.status(200).json(cards)

        } catch (err) {
            // console.log(err)
            next({ code: 500 })
        }
    }
    static async getAttributes(req, res, next) {
        try {
            const cards = await Card.findAll()
            let attr = cards.map(ele => {
                return ele.attribute
            })
            attr = new Set(attr)
            let cleanData = [...attr].filter(ele => {
                return ele !== null
            })
            res.status(200).json(cleanData)
        } catch (err) {
            // console.log(err)
            next({ code: 500 })
        }
    }
    static async getRaces(req, res, next) {
        try {
            const cards = await Card.findAll()
            let race = cards.map(ele => {
                return ele.race
            })
            race = new Set(race)
            let cleanData = [...race].filter(ele => {
                return ele !== null
            })
            res.status(200).json(cleanData)
        } catch (err) {
            // console.log(err)
            next({ code: 500 })
        }
    }
    static async getTypes(req, res, next) {
        try {
            const cards = await Card.findAll()
            let type = cards.map(ele => {
                return ele.type
            })
            type = new Set(type)
            let cleanData = [...type].filter(ele => {
                return ele !== null
            })
            res.status(200).json(cleanData)
        } catch (err) {
            // console.log(err)
            next({ code: 500 })
        }
    }
    static async getLatest(req, res, next) {
        try {
            const latestCards = await axios({
                url: 'https://db.ygoprodeck.com/api/v7/cardinfo.php?misc=yes&sort=new',
                method: 'get',
                timeout: 2000
            })
            console.log(latestCards.data.data)
            res.status(200).json(latestCards.data.data.slice(0, 11))
        } catch (error) {
            // console.log(error)
            next({ code: 500 })
        }
    }
    static async getTwitter(req, res, next) {
        try {
            const query = req.query.q
            // console.log(query)
            const tweets = await axios({
                url: `https://api.twitter.com/2/tweets/search/recent?query=${query}`,
                method: 'get',
                headers: {
                    Authorization: `Bearer ${process.env.TWITTER_BEARER_TOKEN}`
                }
            })
            let cleanData = tweets.data.data
            // cleanData = cleanData.map(ele => {
            //     return ele.text
            // })
            console.log(cleanData)
            res.status(200).json(cleanData)
        } catch (err) {
            console.log(err)
            next({ code: 500 })
        }
    }
}

module.exports = WikiController