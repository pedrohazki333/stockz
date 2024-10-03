const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

const dbconnection = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Database connected!");
  } catch (error) {
    console.log("Database connection failed: ", error);
    process.exit(1);
  }
};

module.exports = dbconnection;
