const express = require("express");
const dotenv = require("dotenv");
const path = require("path");
const dbconnection = require("./config/db.js");

dotenv.config();
dbconnection();

// Express app configuration
const app = express();
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Import routes
const userRoutes = require("./routes/userRoutes.js");
const stockRoutes = require("./routes/stockRoutes.js");
const categoryRoutes = require("./routes/categoryRoutes.js");
const productRoutes = require("./routes/productRoutes.js");
const productStockRoutes = require("./routes/productStockRoutes.js");

// Use routes
app.use("/api/user", userRoutes);
app.use("/api/stock", stockRoutes);
app.use("/api/category", categoryRoutes);
app.use("/api/product", productRoutes);
app.use("/api/productStock", productStockRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});
