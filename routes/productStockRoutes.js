const express = require("express");
const router = express.Router();
const { protect } = require("../middlewares/authMiddleware");
const {
  createProductStock,
  readProductStocks,
  updateProductStock,
  deleteProductStock,
} = require("../controllers/productStockController");

router.post("/create", createProductStock);
router.get("/read", readProductStocks);
router.put("/update/:id", updateProductStock);
router.delete("/delete/:id", deleteProductStock);

module.exports = router;
