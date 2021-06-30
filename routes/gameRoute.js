const GameController = require("../controllers/gameController");
const router = require("express").Router();
const oxfordDictionary = require("../apis/oxfordDictionary");

router.get("/", GameController.gameGet);
router.get("/:id", GameController.gameGetOne);
router.post("/", oxfordDictionary, GameController.gamePost);

module.exports = router;
