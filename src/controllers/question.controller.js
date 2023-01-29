const questionController = require("express").Router();
const questionService = require("../services/question.service");

questionController.get("/", async (req, res, onError) => {
  let questions = await questionService.getAll();
  res.status(200).json(questions);
});

questionController.post("/", async (req, res) => {
  try {
    let question = await questionService.create(req.body);
    res.status(200).json(question);
  } catch (e) {
    console.log(e);
  }
});

module.exports = questionController;
