const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema({
  description: { type: String },
});

module.exports = mongoose.model("Category", categorySchema);
