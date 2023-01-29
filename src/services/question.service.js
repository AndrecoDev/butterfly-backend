const Question = require("../models/Question");

const questionService = {
  getAll: async function () {
    let questions = await Question.find({});
    return questions;
  },

  create: async function (data) {
    let question = new Question(data);
    await question.save();
    return question;
  },
};

module.exports = questionService;
