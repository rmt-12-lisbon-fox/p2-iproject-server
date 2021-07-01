const { Comedian } = require('../models')

class ComedianController {
  static createComedian(req, res) {
    Comedian.create({
      name: req.body.name,
      country: req.body.country,
      imgUrl: req.body.imgUrl,
      ytUrl: req.body.ytUrl,
      birthDate: req.body.birthDate
    })
      .then(comedian => {
        res.status(201).json(comedian)
      })
      .catch(err => {
        res.status(500).json({ message: err.message })
      })
  }
  static findAllComedians(req, res) {
    Comedian.findAll()
      .then(comedians => {
        res.status(200).json(comedians)
      })
      .catch(err => {
        res.status(500).json({ message: err.message })
      })
  }

  static findComedianById(req, res) {
    Comedian.findByPk(req.params.id)
      .then(comedian => {
        res.status(200).json(comedian)
      })
      .catch(err => {
        res.status(500).json({ message: err.message })
      })
  }
}

module.exports = ComedianController