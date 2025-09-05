const ClassRequest = require("../models/tutor/createClass");

exports.createRequest = async (req, res) => {
  try {
    const {
      subject,
      level,
      location,
      schedule,
      fees,
      timestudy,
      numberstudent,
      sessionsPerWeek,
      notes,
      transactionCode,
    } = req.body;

    const paymentImage = req.file ? req.file.path : null;

    const newRequest = new ClassRequest({
      subject,
      level,
      location,
      schedule,
      fees,
      timestudy,
      numberstudent,
      sessionsPerWeek,
      notes,
      transactionCode,
      paymentImage,
    });

    await newRequest.save();
    res.status(201).json({ message: "✅ Yêu cầu đã được lưu thành công" });
  } catch (err) {
    res.status(500).json({ message: "❌ Lỗi server", error: err.message });
  }
};
