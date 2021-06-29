const { FavComedian, Comedian } = require('../models')

class FavComController {
  static addToFavorite(req, res) {
    FavComedian.create({
      UserId: req.user.id,
      ComedianId: req.body.ComedianId
    })
      .then(favComedian => {
        return Comedian.findByPk(favComedian.ComedianId)
      })
      .then(comedian => {
        res.status(201).json({ message: `${comedian.name} added to favorites` })
      })
      .catch(err => {
        res.status(500).json({ message: err.message })
      })
  }
  static findAllFavorites(req, res) {
    FavComedian.findAll()
      .then(favorites => {
        res.status(200).json(favorites)
      })
      .catch(err => [
        res.status(500).json({ message: err.message })
      ])
  }
}

module.exports = FavComController