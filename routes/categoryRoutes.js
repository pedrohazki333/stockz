const express = require("express");
const router = express.Router();
const { protect } = require("../middlewares/authMiddleware");
const {
  createCategory,
  readCategories,
  updateCategory,
  deleteCategory,
} = require("../controllers/categoryController");

router.post("/create", createCategory);
router.get("/read", readCategories);
router.put("/update/:id", updateCategory);
router.delete("/delete/:id", deleteCategory);

module.exports = router;
