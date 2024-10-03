const Stock = require("../models/stockModel");

exports.createStock = async (req, res) => {
  try {
    const newStock = new Stock(req.body);
    await newStock.save();
    res.status(201).json(newStock);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.readStocks = async (req, res) => {
  try {
    const stocks = await Stock.find();
    res.status(200).json(stocks);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.updateStock = async (req, res) => {
  try {
    const updatedStock = await Stock.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    if (!updatedStock) {
      return res.status(404).json({ message: "Stock not found!" });
    }
    res.status(200).json(updatedStock);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.deleteStock = async (req, res) => {
  try {
    const deletedStock = await Stock.findByIdAndDelete(req.params.id);
    if (!deletedStock) {
      return res.status(404).json({ message: "Stock not found!" });
    }
    res.status(200).json({ message: "Stock deleted!" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
