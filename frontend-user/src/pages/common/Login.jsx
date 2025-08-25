import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../../services/authService";
import "../../assets/styles/Login.css";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (!email || !password) {
      setError("Vui lòng điền email và mật khẩu");
      return;
    }

    setLoading(true);
    try {
      const response = await loginUser({ email, password });
      const redirectTo =
        response.role === "student" ? "/homecustomer" : "/hometutor";
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
