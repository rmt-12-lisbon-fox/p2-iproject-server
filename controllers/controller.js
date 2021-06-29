const fetch = require('../helpers/fetch')


class Controller {

  static getAPI(req, res, next) {

    let food = req.query.food

    fetch(food)
    .then(json => {
      res.status(200).json(json)
    });
  }

}

module.exports = Controller