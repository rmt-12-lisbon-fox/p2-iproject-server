const { Review, Founder, Investor } = require('../models')
let translate = require('../helpers/translate.js')

class Controller {
    static getReviews(req, res, next) { // OK
        Review.findAll({
            include: [Investor, Founder],
            order: [['likes', 'DESC']]
        })
        .then(reviews => {
            res.status(200).json(reviews)
        })
        .catch(err => {
            next({ code: 500, message: err.message })
        })
    }

    static getReviewsById(req, res, next) { // OK
        let reviewId = req.params.id
        Review.findByPk(reviewId)
        .then(review => {
            if (review) {
                return Review.findOne({
                    where: {id: reviewId},
                    include: [Investor, Founder]
                })
            } else {
                res.status(404).json({ message: 'error: review not found'})
            }
        })
        .then(review => {
            res.status(200).json(review)
        })
        .catch(err => {
            next({ code: 500, message: err.message })
        })
    }

    static createReview(req, res, next) { // OK
        let newReview = {}

        newReview.FounderId = req.loggedUser.id
        newReview.InvestorId = req.body.InvestorId
        newReview.reviewer = req.body.reviewer
        newReview.title = req.body.title
        newReview.investor_role = req.body.investor_role
        newReview.investment_stage = req.body.investment_stage
        newReview.review = req.body.review
        newReview.rating_overall = req.body.rating_overall
        newReview.rating_professionalism = req.body.rating_professionalism
        newReview.rating_speed = req.body.rating_speed
        newReview.rating_dd_complexity = req.body.rating_dd_complexity
        newReview.rating_post_inv_support = req.body.rating_post_inv_support
        newReview.rating_founder_friendly = req.body.rating_founder_friendly
        newReview.likes = 0
        newReview.likes_id = []
        newReview.status = 'Unverified'

        Review.create(newReview)
        .then(review => {
            res.status(201).json(review)
        })
        .catch(err => {
            next({ name: err.name, validation: err.errors, code: 500, message: err.message })
        })    
    }

    static addLikes(req, res, next) {  // OK
        let reviewId = req.params.id
        let savedReview;
        let flag = true

        Review.findByPk(reviewId)
        .then(review => {
            console.log(review)
            savedReview = review

            if (review) {
                for (let i = 0; i < review.likes_id.length; i++) {
                    if (req.loggedUser.id == review.likes_id[i]) {
                        flag = false
                    }
                }

                if (flag == true) {
                    let newLikes = +review.likes + 1
                    let newLikesId = review.likes_id
    
                    newLikesId.push(req.loggedUser.id)
        
                    return Review.update({
                        likes: newLikes,
                        likes_id: newLikesId
                    }, {
                        where: {
                            id: reviewId
                        }
                    })
                } else {
                    res.status(400).json({message: 'You have already liked this review'})
                } 
            } else {
                    res.status(404).json({message: 'error: review not found'})
                }
            })
            .then(() => {
                return Review.findByPk(reviewId)
            })
            .then(review => {
                review.message = 'Success adding a new like'
                console.log('likes added')
                console.log(review.id, review.likes, review.likes_id)
                res.status(200).json(review)
            })
            .catch(err => {
                next({ code: 500, message: err.message })
            })
    }

    static verifyReview(req, res, next) { // OK
        let reviewId = req.params.id
        let reviewContent;
        Review.findByPk(reviewId)
        .then(review => {
            if (review) {
                reviewContent = review
                return review.update({status: 'Verified'}, {
                    where: {
                        id: reviewId
                    }
                })
            } else {
                res.status(404).json({ message: 'error: review not found'})
            }
        })
        .then(() => {
            console.log('UPDATED')
            console.log(reviewContent.id, reviewContent.title)
            res.status(200).json({message: `Review with ID ${reviewContent.id} is now verified`})
        })
        .catch(err => {
            next({ code: 500, message: err.message })
        })
    }

    static translate(req, res, next) {
        let reviewId = req.params.id

        Review.findByPk(reviewId)
        .then(review => {
            if (!req.body.language || req.body.language == '') {
                console.log(req.body, 'REQ BODYYYYY')
                res.status(400).json({message: 'Please define your language'})
            } else {
                req.messageToTranslate = review.review
                req.lang = req.body.language
    
                return translate(req, res, next)    
            }
        })
        .then(data => {
            res.status(200).json(data.data.data.translations[0].translatedText)
        })
        .catch(err => {
            console.log(err)
            next({ code: 500, message: err.message })
        })
    }
}

module.exports = Controller