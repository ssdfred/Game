const express = require("express");
const router = express.Router();
const Controller = require("../controllers/gameController");

router.get("/score", Controller.getScore);
router.get("/play/:action", Controller.playGame);
router.get("/restart", Controller.restartGame);
router.get("/score/:win/:lose/:egalité", Controller.setScore);

router.post("/score", Controller.setScore);

module.exports = router;