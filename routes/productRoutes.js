const express = require("express");
const router = express.Router();
const { protect } = require("../middlewares/authMiddleware");
const {
  createProduct,
  readProducts,
  updateProduct,
  deleteProduct
} = require("../controllers/productController");

router.post("/create", createProduct);
router.get("/read", readProducts);
router.put("/update/:id", updateProduct);
router.delete("/delete/:id", deleteProduct);

module.exports = router;
