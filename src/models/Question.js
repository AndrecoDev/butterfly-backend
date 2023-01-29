const mongoose = require("mongoose");

const questionSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "question name is required"],
  },

  comment: {
    type: String,
  },

  creationDate: { type: mongoose.Schema.Types.Date, default: Date.now },
  lastTimeModified: mongoose.Schema.Types.Date,
});

questionSchema.pre("save", function preSave(next) {
  this.lastTimeModified = Date.now();
  next();
});

module.exports = mongoose.model("Question", questionSchema);
