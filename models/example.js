const mongoose = require("mongoose");

const exampleSchema = new mongoose.Schema({
  example: {
    type: String,
    require: [true, "Please provide an example"],
  },
  timestamp: {
    type: String,
    required: [true, "Please provide timestamp."],
  },
});

const example = mongoose.model("example", exampleSchema);

module.exports = example;
