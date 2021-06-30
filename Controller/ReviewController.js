const { User, Review } = require('../models');

class ReviewController {
    static async create(req, res) {
        let data = {
            UserId: req.user.id,
            title: req.body.title,
            comment: req.body.comment
        }

        try {
            let result = await Review.create(data);
            res.status(201).json({ id: result.id });
        } catch (err) {
            if (err.errors) {
                let listErr = err.errors.map( el => el.message ).join(", ");
                res.status(400).json({ message: listErr });
            }else {
                res.status(500).json({ message: err });
            }
        }
    }

    static async update(req, res) {
        let data = {
            comment: req.body.comment
        }
        let id = req.params.id;

        try {
            let result = await Review.update(data, {
                where: {
                    id
                }
            })
            if (result[0] === 1) {
                res.status(200).json({ message: 'Update is successfull' });
            }else {
                throw 404;
            }
        } catch (err) {
            if (err === 404) {
                res.status(err).json({ message: 'not found' });
            }else if (err.errors) {
                let listErr = err.errors.map( el => el.message ).join(", ");
                res.status(400).json({ message: listErr });
            }else{
                res.status(500).json({ message: err });
            }
        }
    }

    static async findAll(req, res) {
        try {
            let result = await Review.findAndCountAll({
                include: [ { 
                        model: User,
                        attributes: ['imageUrl', 'email']
                    } 
                ],
                order: [
                    ['createdAt', 'DESC']
                ]
            });
            res.status(200).json(result);
        } catch (er) {
            res.status(500).json({ message: err });
        }
    }

    static async findById(req, res) {
        let id = req.params.id;
        
        try {
            let result = await Review.findOne({
                where: {
                    id
                }
            });
            if (result) {
                res.status(200).json(result);
            }else {
                throw 404;
            }
        } catch (err) {
            if (err === 404) {
                res.status(err).json({ message: 'not found' });
            }else{
                res.status(500).json({ message: err });
            }
        }
    }

    static async findByUserId(req, res) {
        let UserId = req.user.id;

        try {
            let result = await Review.findAll({
                include: [ { 
                        model: User,
                        attributes: ['imageUrl', 'email']
                    } 
                ],
                where: {
                    UserId
                }
            });
            if (result) {
                res.status(200).json(result);
            }else {
                throw 404;
            }
        } catch (err) {
            if (err === 404) {
                res.status(err).json({ message: 'not found' });
            }else{
                res.status(500).json({ message: err });
            }
        }
    }

    static async delete(req, res) {
        let id = req.params.id;

        try {
            let result = await Review.destroy({
                where: {
                    id
                }
            });
            if (result) {
                res.status(200).json({ message: 'Delete is successfull' })
            }else {
                throw 404;
            }
        } catch (err) {
            if (err === 404) {
                res.status(err).json({ message: 'not found' });
            }else{
                res.status(500).json({ message: err });
            }
        }
    }
}

module.exports = ReviewController;