const { Blog } = require('../models')

class Controller {
    static addBlog(req, res, next) {
        console.log('masuk');
        const img = req.image.url
        const { title, author, description } = req.body
        console.log({ title, author, description, img }, '>>>>>>');
        Blog.create({ title, author, description, img })
            .then((data) => {
                console.log(data);
                res.status(201).json({ data })
            })
            .catch((err) => {
                next({ code: 500, message: err.message })
            })
    }

    static showBlog(req, res, next) {
        Blog.findAll()
            .then((data) => {
                if (data) {
                    res.status(200).json(data)
                } else {
                    next({ code: 404, message: 'Not Found' })
                }
            })
            .catch((err) => {
                next({ code: 500, message: err.message })
            })
    }

    static findOneBlog(req, res, next) {
        Blog.findOne({ where: { id: req.params.id } })
            .then((data) => {
                if (data) {
                    res.status(200).json(data)
                } else {
                    next({ code: 404, message: 'Not Found' })
                }
            })
            .catch((err) => {
                next({ code: 500, message: err.message })
            })
    }
}

module.exports = Controller