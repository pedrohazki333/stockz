const express = require("express");
const router = express.Router();
const { protect } = require("../middlewares/authMiddleware");
const {
  createStock,
  readStocks,
  updateStock,
  deleteStock,
} = require("../controllers/stockController");

router.post("/create", createStock);
router.get("/read", readStocks);
router.put("/update/:id", updateStock);
router.delete("/delete/:id", deleteStock);

module.exports = router;
