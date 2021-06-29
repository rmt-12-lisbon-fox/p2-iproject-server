const {Community, MyCommunity, User} = require('../models');

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

    static addMyCommunity(req,res) {
        let communityId = req.params.id
        MyCommunity.create({
            UserId: req.user.id,
            CommunityId: communityId
        })
        .then(data => {
            res.status(200).json({message: "Success join", data})
        })
        .catch(err => {
            res.status(500).json({message: err.message})
        })
    }

    static allMyCommunity(req,res) {
        User.findAll({
            where: {
                id: req.user.id
            },
            include: Community

        })
        .then(data => {
            res.status(200).json(data)
        })
        .catch(err => {
            res.status(500).json({message: err.message})
        })
    }
}

module.exports = Controller