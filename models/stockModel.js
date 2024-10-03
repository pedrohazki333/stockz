const mongoose = require("mongoose");

const stockSchema = new mongoose.Schema({
  name: { type: String, required: true },
  address: { type: String },
  code: { type: String, required: true, unique: true },
});

module.exports = mongoose.model("Stock", stockSchema);
