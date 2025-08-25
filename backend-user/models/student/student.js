const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const studentSchema = new mongoose.Schema({
  full_name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  phone_number: { type: String, required: true },
  password: { type: String, required: true },
  role: { type: String, default: "student" },
  active: { type: Boolean, default: true },
  address: {
    province: String, // Tỉnh/TP
    district: String, // Quận/Huyện
    ward: String, // Phường/Xã
  },
});

studentSchema.pre("save", async function (next) {
  if (this.isModified("password")) {
    this.password = await bcrypt.hash(this.password, 10);
  }
  next();
});

module.exports = mongoose.model("Student", studentSchema);
