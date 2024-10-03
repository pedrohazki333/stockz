const mongoose = require("mongoose");

const productStockSchema = new mongoose.Schema({
  product: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Product",
    required: true,
  },
  stock: { type: mongoose.Schema.Types.ObjectId, ref: "Stock", required: true },
  quantity: { type: Number, required: true, min: 0 },
  lastUpdateAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("ProductStock", productStockSchema);
