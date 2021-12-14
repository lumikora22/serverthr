const express = require("express");
const router = express.Router();
const question = require("../controllers/questionController");

router.get("/question", question.getQuestions);
router.post("/question", question.createQuestioner);

module.exports = router;
