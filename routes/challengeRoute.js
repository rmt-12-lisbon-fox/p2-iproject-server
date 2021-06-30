const ChallengeController = require("../controllers/challengeController");
const router = require("express").Router(); 

router.get("/", ChallengeController.challengeGet);
router.get("/:id", ChallengeController.challengeGetOne);
router.post("/", ChallengeController.challengePost);
router.put("/:id", ChallengeController.challengePut);
router.delete("/:id", ChallengeController.challengeDelete);

module.exports = router;
