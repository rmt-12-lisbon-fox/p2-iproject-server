const {Deck, History} = require('../models')

class DecksController {
    static async getAllDecks(req, res, next) {
        const UserId = +req.user.id
        try {
            const foundDecks = await Deck.findAll({where: {UserId}})
            res.status(200).json(foundDecks)
        } catch {    
            next({code:500})
        }
    }
    static async postDeck(req, res, next) {
        const UserId = +req.user.id
        const {name, total, deckCode, qrCode, totalPrice} = req.body
        try {
            const newDeck = await Deck.create({name, total, deckCode, qrCode, totalPrice, UserId})
            // deck has been saved
            await History.create({UserId, description: `Deck named ${newDeck.name} has been created by user id ${UserId}`})
            res.status(200).json(newDeck)
        } catch {
            next({code: 500})
        }
    }
    static async getDeck(req, res, next) {
        const deckId = +req.params.deckId
        // const UserId = +req.user.id
        try {
            const foundDeck = await Deck.findByPk(deckId)
            if (foundDeck) {
                res.status(200).json(foundDeck)
            } else {
                next({code:400})
            }
        } catch (error) {
            next()
        }
    }
    static async putDeck(req, res, next) {
        const deckId = +req.params.deckId
        const UserId = +req.user.id
        const {name, total, deckCode, qrCode, totalPrice} = req.body
        try{
            const newDeck = await Deck.update({name, total, deckCode, qrCode, totalPrice},{where: {id: deckId}})
            if (newDeck) {
                await History.create({UserId, description: `Deck with id ${deckId} has been updated`})
                res.status(200).json(newDeck)
            } else {
                next({code:400})
            }
        } catch (err){
            next({code:500})
            console.log(err)
        }
    }
    static async deleteDeck(req, res, next) {
        const deckId = +req.params.deckId
        const UserId = +req.user.id
        const deckName = req.user.deckName
        try {
            await Deck.destroy({where: {id:deckId}})
            // deck has been saved
            await History.create({UserId, description: `Deck named ${deckName} has been deleted by user id ${UserId}`})
            res.status(200).json({msg: 'Deck successfully deleted'})
        } catch(err) {
            // console.log(err)
            next({code: 500})
        }
    }
}

module.exports = DecksController