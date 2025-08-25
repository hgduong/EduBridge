const Student = require("../models/student/student");
const Tutor = require("../models/tutor/tutor");

exports.registerUser = async (req, res) => {
  const { role, password, confirm_password, ...userData } = req.body;

  if (!role || !["student", "tutor"].includes(role)) {
    return res.status(400).json({ message: "Vai trò không hợp lệ" });
  }

  if (
    !userData.full_name ||
    !userData.email ||
    !userData.phone_number ||
    !password ||
    !confirm_password
  ) {
    return res.status(400).json({ message: "Thiếu thông tin bắt buộc" });
  }

  if (password !== confirm_password) {
    return res.status(400).json({ message: "Mật khẩu không khớp" });
  }

  try {
    const Model = role === "student" ? Student : Tutor;
    const existing = await Model.findOne({ email: userData.email });
    if (existing) return res.status(409).json({ message: "Email đã tồn tại" });

    const newUser = new Model({ ...userData, password });
    await newUser.save();

    res
      .status(201)
      .json({ message: "Đăng ký thành công", userId: newUser._id, role });
  } catch (err) {
    res.status(500).json({ message: "Lỗi server", error: err.message });
  }
};

exports.getUserById = async (req, res) => {
  const { role, id } = req.params;

  const Model = role === "student" ? Student : role === "tutor" ? Tutor : null;
  if (!Model) return res.status(400).json({ message: "Vai trò không hợp lệ" });

  try {
    const user = await Model.findById(id);
    if (!user)
      return res.status(404).json({ message: "Không tìm thấy người dùng" });
    res.status(200).json(user);
  } catch (err) {
    res
      .status(500)
      .json({ message: "Lỗi khi lấy người dùng", error: err.message });
  }
};
