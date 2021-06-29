const {Card} = require('../models')

class WikiController {
    static async getCard(req, res, next) {
        const cardId = req.params.cardId
        try{
            const foundCard = await Card.findOne({where: {cardId}})
            if (foundCard) {
                res.status(200).json(foundCard)
            } else {
                next({code:404})
            }
        } catch(err) {
            console.log(err)
        }

    }
}

module.exports = WikiController