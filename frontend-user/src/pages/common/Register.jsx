import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { registerUser } from "../../services/authService";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../../assets/styles/Register.css";

const Register = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    full_name: "",
    email: "",
    phone_number: "",
    password: "",
    confirm_password: "",
    role: "student",
  });

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    const trimmedForm = {
      ...form,
      full_name: form.full_name.trim(),
      email: form.email.trim(),
      phone_number: form.phone_number.trim(),
      password: form.password.trim(),
      confirm_password: form.confirm_password.trim(),
    };

    const nameParts = trimmedForm.full_name.split(" ");
    if (nameParts.length > 30) {
      setError("Họ tên không được quá 30 kí tự");
      return;
    }
    if (nameParts.some((word) => word.length > 10)) {
      setError("Mỗi từ trong họ tên không quá 10 kí tự");
      return;
    }

    if (trimmedForm.password.length < 6 || trimmedForm.password.length > 30) {
      setError("Mật khẩu phải từ 6 đến 30 kí tự");
      return;
    }

    if (trimmedForm.password !== trimmedForm.confirm_password) {
      setError("Mật khẩu xác nhận không khớp");
      return;
    }

    if (trimmedForm.email.length > 30) {
      setError("Email không được quá 30 kí tự");
      return;
    }

    if (/\s/.test(trimmedForm.password)) {
      setError("Mật khẩu không được chứa khoảng trắng");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(trimmedForm.email)) {
      setError("Email không hợp lệ");
      return;
    }

    const phoneRegex = /^0\d{9,10}$/;
    if (!phoneRegex.test(trimmedForm.phone_number)) {
      setError("Số điện thoại phải bắt đầu bằng 0 và có 10 hoặc 11 chữ số");
      return;
    }

    setLoading(true);
    try {
      const res = await registerUser(trimmedForm);
      toast.success("Đăng ký thành công!");
      navigate("/login");
    } catch (err) {
      setError(err.message || "Đăng ký thất bại");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="register-form">
      <h2>Đăng ký tài khoản</h2>
      {error && <p className="error">{error}</p>}

      <div className="form-group">
        <label>Họ tên</label>
        <input
          name="full_name"
          value={form.full_name}
          onChange={handleChange}
          required
        />
      </div>

      <div className="form-group">
        <label>Email</label>
        <input
          name="email"
          type="email"
          value={form.email}
          onChange={handleChange}
          required
        />
      </div>

      <div className="form-group">
        <label>Số điện thoại</label>
        <input
          name="phone_number"
          value={form.phone_number}
          onChange={handleChange}
          required
        />
      </div>

      <div className="form-group">
        <label>Mật khẩu</label>
        <input
          name="password"
          type="password"
          value={form.password}
          onChange={handleChange}
          required
        />
      </div>

      <div className="form-group">
        <label>Xác nhận mật khẩu</label>
        <input
          name="confirm_password"
          type="password"
          value={form.confirm_password}
          onChange={handleChange}
          required
        />
      </div>

      <div className="form-group">
        <label>Vai trò</label>
        <select name="role" value={form.role} onChange={handleChange}>
          <option value="student">Học sinh</option>
          <option value="tutor">Gia sư</option>
        </select>
      </div>

      <button type="submit" disabled={loading} className="submit-btn">
        {loading ? "Đang gửi..." : "Đăng ký"}
      </button>
    </form>
  );
};

export default Register;
