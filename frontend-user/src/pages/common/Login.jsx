import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../../services/authService";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../../assets/styles/Login.css";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("student");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const trimmedEmail = email.trim();
  const trimmedPassword = password.trim();
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (!email || !password) {
      setError("Vui lòng điền email và mật khẩu");
      return;
    }
    if (!emailRegex.test(email)) {
      setError("Email không hợp lệ");
      return;
    }
    if (password.length < 6) {
      setError("Mật khẩu phải có ít nhất 6 ký tự");
      return;
    }
    if (trimmedEmail.length > 30 || trimmedPassword.length > 30) {
      setError("Email hoặc mật khẩu không được vượt quá 30 ký tự");
      return;
    }

    setLoading(true);
    try {
      const response = await loginUser({ email, password, role });

      // Lưu thông tin người dùng
      const userWithRole = { ...response.user, role };
      localStorage.setItem("user", JSON.stringify(userWithRole));

      localStorage.setItem("token", response.token);

      // Gửi sự kiện để Header cập nhật
      window.dispatchEvent(new Event("storage"));

      // Hiện toast chào mừng
      toast.success(`Xin chào ${response.user.full_name}!`, {
        position: "top-right",
        autoClose: 5000,
      });

      const redirectTo = role === "student" ? "/student" : "/hometutor";
      navigate(redirectTo);
    } catch (err) {
      setError(err.message || "Đăng nhập thất bại");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form className="login-form" onSubmit={handleSubmit}>
      <h2>Đăng nhập</h2>
      {error && <p className="error">{error}</p>}

      <div className="form-group">
        <label>Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>

      <div className="form-group">
        <label>Mật khẩu</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>

      <div className="form-group">
        <label>Vai trò</label>
        <select value={role} onChange={(e) => setRole(e.target.value)}>
          <option value="student">Học sinh</option>
          <option value="tutor">Gia sư</option>
        </select>
      </div>

      <button type="submit" disabled={loading} className="submit-btn">
        {loading ? "Đang đăng nhập..." : "Đăng nhập"}
      </button>

      <p className="register-link">
        Chưa có tài khoản?{" "}
        <button type="button" onClick={() => navigate("/register")}>
          Đăng ký
        </button>
      </p>
    </form>
  );
};

export default Login;
