const ProductStock = require("../models/productStockModel");

exports.createProductStock = async (req, res) => {
  try {
    const newProductStock = new ProductStock(req.body);
    await newProductStock.save();
    res.status(201).json(newProductStock);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.readProductStocks = async (req, res) => {
  try {
    const productStocks = await ProductStock.find();
    res.status(200).json(productStocks);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.updateProductStock = async (req, res) => {
  try {
    const updatedProductStock = await ProductStock.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    if (!updatedProductStock) {
      return res.status(404).json({ message: "Product Stock not found!" });
    }
    res.status(200).json(updatedProductStock);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.deleteProductStock = async (req, res) => {
  try {
    const deletedProductStock = await ProductStock.findByIdAndDelete(
      req.params.id
    );
    if (!deletedProductStock) {
      return res.status(404).json({ message: "Product Stock not found!" });
    }
    res.status(200).json({ message: "Product Stock deleted!" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
