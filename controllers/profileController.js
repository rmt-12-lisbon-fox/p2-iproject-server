const {User} = require('../models')

class ProfileController {
    static async getProfile(req, res, next) {
        const userId = +req.user.id
        try {
            const foundUser = await User.findByPk(userId, { include: [Deck] })
            foundUser.password = undefined
            // console.log(foundUser)
            // const {id, username, email, imageUrl, createAt, updatedAt, Decks} = foundUser
            res.status(200).json(foundUser)
        } catch {
            next({ code: 500 })
        }
    }
}

module.exports = ProfileController