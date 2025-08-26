const mongoose = require("mongoose");

const tutorRequestSchema = new mongoose.Schema({
  //Thông tin lớp học
  subject: { type: String, required: true },
  level: { type: String, required: true },
  location: { type: String, required: true },
  address_detail: { type: String },
  schedule: { type: String, required: true },
  learning_type: {
    type: String,
    enum: ["Offline", "Online", "Online + Offline"],
    default: "Offline",
    required: true,
  },
  notes: { type: String },

  //Snapshot thông tin người tạo (tutor)
  full_name: { type: String, required: true },
  phone_number: { type: String, required: true },
  email: { type: String },

  //  Liên kết tutor (để populate khi cần)
  created_by: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Tutor",
    required: true,
  },

  // Trạng thái yêu cầu
  status: {
    type: String,
    enum: ["Đang chờ lớp", "Đã nhận lớp", "Lớp đã đầy", "Hủy lớp"],
    default: "Đang chờ lớp",
  },

  created_at: { type: Date, default: Date.now },
});

module.exports = mongoose.model("TutorRequest", tutorRequestSchema);
