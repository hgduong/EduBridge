const mongoose = require("mongoose");

const scheduleSchema = new mongoose.Schema(
  {
    tutor_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Tutor",
      required: true,
    },
    student_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Student",
      required: true,
    },
    subject: { type: String, required: true },
    date: { type: Date, required: true }, // Ngày học
    start_time: { type: String, required: true }, // "14:00"
    end_time: { type: String, required: true }, // "15:30"
    status: {
      type: String,
      enum: ["Đang chờ", "Xác nhận", "Hoàn thành", "Hủy yêu cầu"],
      default: "Đang chờ",
    },
    notes: { type: String }, // Ghi chú thêm nếu cần
  },
  {
    collection: "schedules",
    timestamps: true,
  }
);

module.exports = mongoose.model("Schedule", scheduleSchema);
