const { jwtCheck } = require('../helpers/jwt')
const { User, Deck } = require('../models')

async function authentication(req, res, next) {
    const token = req.headers.access_token
    if (token) {
        try {
            const { id } = jwtCheck(token)
            const foundUser = await User.findByPk(id)
            req.user = {
                id: foundUser.id,
                username: foundUser.username
            }
            next()
        } catch {
            next({ code: 401, msg: 'Invalid access token' })
        }
    } else {
        next({ code: 401, msg: 'Please login first' })
    }
}

// buat profile, edit delete deck
async function authorization(req, res, next) {
    const deckId = +req.params.deckId
    const UserId = +req.user.id
    const foundDeck = await Deck.findByPk(deckId)
    if (UserId === foundDeck.UserId) {
        req.user.deckName = foundDeck.name
        next()
    } else {
        next({code:401})
    }
}

module.exports = {
    authentication,
    authorization
}