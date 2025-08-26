const Student = require("../models/student/student");
const Tutor = require("../models/tutor/tutor");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

exports.loginUser = async (req, res) => {
  try {
    const { email, password, role } = req.body;

    // Chọn model theo role
    const Model = role === "tutor" ? Tutor : Student;

    // Tìm người dùng theo email
    const user = await Model.findOne({ email });
    if (!user) {
      return res.status(401).json({ message: "Email không tồn tại" });
    }

    // Kiểm tra mật khẩu
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ message: "Sai mật khẩu" });
    }

    // Tạo JWT
    const token = jwt.sign(
      { id: user._id, role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: "7d" }
    );

    // Trả về thông tin người dùng
    res.status(200).json({
      message: "Đăng nhập thành công",
      token,
      user: {
        id: user._id,
        full_name: user.full_name,
        email: user.email,
        phone_number: user.phone_number,
        role: user.role,
        address: user.address,
      },
    });
  } catch (error) {
    console.error("Lỗi đăng nhập:", error);
    res.status(500).json({ message: "Lỗi server" });
  }
};
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

exports.getAllUsers = async (req, res) => {
  try {
    const students = await Student.find();
    const tutors = await Tutor.find();
    const allUsers = [...students, ...tutors];
    res.status(200).json({ allUsers });
  } catch (error) {
    res.status(500).json({
      message: "Lỗi khi lấy danh sách người dùng",
      error: error.message,
    });
  }
};

exports.updateUserProfile = async (req, res) => {
  const userId = req.params.id;
  const updateData = req.body;

  try {
    // Xác thực quyền sửa: chỉ chính chủ hoặc admin
    // if (req.user.id !== userId && req.user.role !== "admin") {
    //   return res.status(403).json({ message: "Không có quyền chỉnh sửa" });
    // }

    // Xác định model theo role (nếu cần)
    const student = await Student.findById(userId);
    const tutor = await Tutor.findById(userId);

    let updatedUser;
    if (student) {
      updatedUser = await Student.findByIdAndUpdate(userId, updateData, {
        new: true,
      });
    } else if (tutor) {
      updatedUser = await Tutor.findByIdAndUpdate(userId, updateData, {
        new: true,
      });
    } else {
      return res.status(404).json({ message: "Không tìm thấy người dùng" });
    }

    res.status(200).json({
      message: "Cập nhật thành công",
      user: updatedUser,
    });
  } catch (error) {
    console.error("Lỗi cập nhật:", error.message);
    res.status(500).json({ message: "Lỗi server", error: error.message });
  }
};
