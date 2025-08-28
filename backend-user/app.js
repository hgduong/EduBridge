const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const paymentRoutes = require("./routes/payment.route");
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const authRoutes = require("./routes/auth.route");
app.use("/api/auth", authRoutes);
app.use("/api", paymentRoutes);
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("✅ Kết nối MongoDB thành công"))
  .catch((err) => console.error("❌ Lỗi kết nối MongoDB:", err));

module.exports = app;
