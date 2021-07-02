const { Bookmark, User, Design } = require('../models')

class Controller {
    static findAllBookmark(req, res){
        Bookmark.findAll({
            include: [Design],
            where: {
                UsersId: req.user.id
            }
        })
        .then((result) => {
            res.status(200).json(result)
        })
        .catch((err) => {
            res.status(500).json({ message: err.message })
        })
    }
    static addBookmark(req, res){
        const input = {
            DesignId: req.body.DesignId,
            UsersId: req.user.id
        }

        Bookmark.create(input)
        .then(() => {
            res.status(201).json({
                message: 'Added to your wishlist', 
            })
        })
        .catch(() => {
            next({ code: 400, message: 'Bad requests' })
        })
    }
    static deleteBookmark(req, res){
        Bookmark.destroy({
            where: {
                DesignId: +req.params.DesignId
            }
        })
        .then((result) => {
            if (result){
                res.status(200).json({ message: 'Delete Success' })
            }
            else {
                res.status(404).json({ message: 'Data not found' })
            }
        })
        .catch((err) => {
            // next({ code: 500, message: err.message })
            res.status(500).json({ message: err.message })
        })
    }
}

module.exports = Controller