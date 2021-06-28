const {Signal} = require('../models')

class Controller {
  static signal(req, res, next) {
    const {title, signal} = req.body
    const input = {title, signal}
    Signal.create(input)
    .then(instance => {
      res.status(201).json(instance)
    })
    .catch(err => {
      let errors
      if (err.errors) errors = err.errors.flatMap(m => m.message)
      err.errors ? next({code:400, message: errors}) : next({code:500})
    })
  }
  static hello(req, res, next) {
    res.status(200).json({message: 'welcome to smartinvestment'})
  }
}

module.exports = Controller