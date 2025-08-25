const TutorRequest = require("../models/tutorRequest");

exports.createTutorRequest = async (req, res) => {
  try {
    // Dữ liệu từ form gửi lên
    const {
      subject,
      level,
      location,
      address_detail,
      schedule,
      learning_type,
      notes,
    } = req.body;

    //  Dữ liệu từ tutor đã đăng nhập (gắn từ middleware)
    const { _id, full_name, phone_number, email } = req.user;

    // 📦 Tạo yêu cầu mới
    const newRequest = new TutorRequest({
      subject,
      level,
      location,
      address_detail,
      schedule,
      learning_type,
      notes,
      full_name,
      phone_number,
      email,
      created_by: _id,
    });

    await newRequest.save();

    res.status(201).json({
      message: "Yêu cầu mở lớp đã được tạo thành công",
      data: newRequest,
    });
  } catch (error) {
    console.error("Lỗi tạo yêu cầu:", error);
    res.status(500).json({ message: "Lỗi khi tạo yêu cầu", error });
  }
};
