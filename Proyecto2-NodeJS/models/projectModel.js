"use strict";

const mongoose = require("mongoose");
const schema = mongoose.Schema;

const projectSchema = schema({
  name: String,
  description: String,
  category: String,
  languages: String,
  year: Number,
  image: String,
});

module.exports = mongoose.model("Project", projectSchema);
