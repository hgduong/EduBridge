const mongoose = require("mongoose");

const createClassSchema = new mongoose.Schema({
  subject: String,
  level: String,
  location: String,
  schedule: String,
  fees: String,
  timestudy: String,
  numberstudent: String,
  sessionsPerWeek: String,
  notes: String,
  transactionCode: String,
  paymentImage: String,
  status: { type: String, default: "pending" },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("createClass", createClassSchema);
