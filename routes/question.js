const express = require("express");
const router = express.Router();
const question = require("../controllers/questionController");

router.get("/question", question.getQuestions);
router.post("/question", question.createQuestioner);
router.delete("/question/:id", question.deleteQuestioner);

module.exports = router;
