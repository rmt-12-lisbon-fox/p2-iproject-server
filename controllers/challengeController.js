const { Challenge } = require("../models/index");
const { wordSetting } = require("../helpers/scrabble");

class ChallengeController {
  static challengeGet(req, res, next) {
    Challenge.findAll()
      .then((challenge) => {
        res.status(200).json(challenge);
      })
      .catch((err) => {
        next({ statusCode: 500 });
      });
  }
  static challengeGetOne(req, res, next) {
    req.challenge = req.params.id;
    console.log(req.challenge, "ini apa?");
    Challenge.findByPk(req.params.id)
      .then((challenge) => {
        if (challenge) {
          const wordChallenge = wordSetting(challenge.wordLong, challenge.totalWords);
          res.status(200).json(wordChallenge);
        } else {
          next({ statusCode: 404 });
        }
      })
      .catch((err) => {
        next({ statusCode: 500 });
      });
  }
  static challengePost(req, res, next) {
    const { email, password } = req.body;
    Challenge.create({ email, password })
      .then((challenge) => {
        res.status(201).json(challenge);
      })
      .catch((err) => {
        if (err.name === "SequelizeUniqueConstraintError" || err.name === "SequelizeValidationError") {
          err = err.errors.map((e) => e.message);
          res.status(400).json({ message: err });
        } else {
          next({ statusCode: 500 });
        }
      });
  }
  static challengePut(req, res, next) {
    const { Challengename, email, password, role, phoneNumber, address } = req.body;
    Challenge.update(
      { Challengename, email, password, role, phoneNumber, address },
      {
        where: {
          id: req.params.id,
        },
      }
    )
      .then((challenge) => {
        if (challenge[0]) {
          res.status(200).json({ Challengename, email, role, phoneNumber, address });
        } else {
          next({ statusCode: 404 });
        }
      })
      .catch((err) => {
        if (err.name === "SequelizeUniqueConstraintError" || err.name === "SequelizeValidationError") {
          err = err.errors.map((e) => e.message);
          res.status(400).json({ message: err });
        } else {
          next({ statusCode: 500 });
        }
      });
  }
  static challengeDelete(req, res, next) {
    let entity;
    Challenge.findByPk(req.params.id)
      .then((challenge) => {
        entity = challenge;
        return Challenge.destroy({
          where: {
            id: req.params.id,
          },
        });
      })
      .then((challenge) => {
        if (entity) {
          res.status(200).json({ message: `${entity.email} success to delete` });
        } else {
          next({ statusCode: 404 });
        }
      })
      .catch((err) => {
        next({ statusCode: 500 });
      });
  }
}

module.exports = ChallengeController;
