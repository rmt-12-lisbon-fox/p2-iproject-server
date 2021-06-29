const {Community, MyCommunity} = require('../models');

class Controller {
    static allCommunity(req,res) {
        Community.findAll()
        .then(data => {
            res.status(200).json(data)
        })
        .catch(err => {
            res.status(500).json({message: err.message})
        })
    }
}

module.exports = Controller