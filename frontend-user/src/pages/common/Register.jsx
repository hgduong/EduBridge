import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { registerUser } from "../../services/authService";
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

    if (form.password !== form.confirm_password) {
      setError("Mật khẩu xác nhận không khớp");
      return;
    }

    setLoading(true);
    try {
      // Gửi dữ liệu lưu vào mongo
      const res = await registerUser(form);
      //-------------------------------------------
      const redirectTo = res.role === "student" ? "/student" : "/hometutor";
      navigate(redirectTo);
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
