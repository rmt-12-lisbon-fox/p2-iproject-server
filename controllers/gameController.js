const { Game, Word } = require("../models/index");
const { wordSetting, wordValue } = require("../helpers/scrabble");

class GameController {
  static gameGet(req, res, next) {
    Game.findAll()
      .then((game) => {
        res.status(200).json(game);
      })
      .catch((err) => {
        next({ statusCode: 500 });
      });
  }
  static async gamePost(req, res, next) {
    try {
      let { ChallengeId } = req.body;
      let wordResult = [];
      req.oxfordDictionary.forEach((word) => {
        if (word.status === "fulfilled") {
          wordResult.push(word.value.data.word);
        }
      });
      let wordInputValue = wordValue(wordResult);
      let game = await Game.create({ UserId: req.user.id, ChallengeId, score: wordInputValue.score });

      let wordCreate = [];
      for (let i = 0; i < wordResult.length; i++) {
        wordCreate.push(await Word.create({ UserId: req.user.id, ChallengeId, word: wordResult[i], score: wordInputValue.totalWordValue[i] }));
      }
      console.log(wordCreate);

      res.status(201).json({ game, word: wordCreate });
    } catch (err) {
      if (err.name === "SequelizeUniqueConstraintError" || err.name === "SequelizeValidationError") {
        err = err.errors.map((e) => e.message);
        res.status(400).json({ message: err });
      } else {
        next({ statusCode: 500 });
      }
    }
  }
}

module.exports = GameController;
