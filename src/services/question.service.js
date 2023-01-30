const Question = require("../models/Question");

const questionService = {
  getAll: async function () {
    let questions = await Question.find();

    questions.sort(() => Math.random() - 0.5);

    return questions;
  },

  create: async function (data) {
    let question = new Question(data);
    await question.save();
    return question;
  },
};

module.exports = questionService;
