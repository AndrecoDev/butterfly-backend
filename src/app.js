const questionController = require("./controllers/question.controller");
const app = require("express").Router();

app.use("/questions", questionController);

module.exports = app;
