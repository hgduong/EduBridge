// src/layout/HeaderComponent.jsx
import "../assets/styles/HeaderComponent.css";
import { Link, useNavigate, useLocation } from "react-router-dom";
import logoTE from "../assets/images/logo_TE.jpg";
import { useEffect, useState } from "react";
import WebButton from "../components/common/WebButton";

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const updateUser = () => {
      const storedUser = localStorage.getItem("user");
      setUser(storedUser ? JSON.parse(storedUser) : null);
    };

    updateUser(); // lần đầu
    window.addEventListener("storage", updateUser); // lắng nghe thay đổi

    return () => window.removeEventListener("storage", updateUser);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setUser(null);
    navigate("/login");
  };

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      const yOffset = -60;
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  const navigateAndScroll = (id) => {
    if (location.pathname === "/" || location.pathname === "") {
      scrollToSection(id);
      return;
    }
    navigate("/", { state: { scrollTo: id } });
  };

  const navItems = [
    { label: "Giới thiệu", toSection: "about" },
    { label: "Tìm kiếm", toSection: "search" },
    { label: "Dành cho gia sư", to: "/hometutor" },
    { label: "Dành cho học viên", to: "/student" },
    { label: "Hướng dẫn", to: "/guide" },
    { label: "Chính sách", to: "/policy" },
    { label: "Liên hệ", toSection: "contact" },
  ];

  // Ẩn item không hợp với role
  const filteredNavItems = navItems.filter((item) => {
    if (!user) return true; // chưa đăng nhập → hiển thị tất cả
    if (item.to === "/hometutor" && user.role === "student") return false;
    if (item.to === "/student" && user.role === "tutor") return false;
    return true;
  });

  return (
    <header className="header">
      <div className="header-container">
        {/* Logo */}
        <div className="brand-wrapper">
          <Link to="/" className="brand">
            <img src={logoTE} alt="EduBridge" className="site-logo" />
          </Link>
        </div>

        {/* Navigation */}
        <nav className="header-nav">
          {filteredNavItems.map((item, idx) =>
            item.to ? (
              <Link key={idx} to={item.to} className="nav-link">
                {item.label}
              </Link>
            ) : item.toSection ? (
              <span
                key={idx}
                className="nav-link"
                onClick={() => navigateAndScroll(item.toSection)}
              >
                {item.label}
              </span>
            ) : (
              <span key={idx} className="nav-link" onClick={item.action}>
                {item.label}
              </span>
            )
          )}
        </nav>

        {/* Auth Buttons */}
        <div className="auth-buttons">
          {!user ? (
            <>
              <WebButton
                text="Đăng kí"
                onClick={() => navigate("/register")}
                width="120px"
                height="46px"
                backgroundColor="var(--color-primary)"
                textColor="var(--color-white)"
                borderColor="var(--color-primary)"
                hoverBackgroundColor="var(--color-secondary)"
                hoverTextColor="var(--color-white)"
                hoverBorderColor="var(--color-secondary)"
                borderRadius="12px"
              />
              <WebButton
                text="Đăng nhập"
                onClick={() => navigate("/login")}
                width="120px"
                height="46px"
                backgroundColor="transparent"
                textColor="var(--color-primary)"
                borderColor="var(--color-primary)"
                hoverBackgroundColor="var(--color-secondary)"
                hoverTextColor="var(--color-white)"
                hoverBorderColor="var(--color-secondary)"
                borderRadius="12px"
              />
            </>
          ) : (
            <WebButton
              text="Đăng xuất"
              onClick={handleLogout}
              width="120px"
              height="46px"
              backgroundColor="var(--color-primary)"
              textColor="var(--color-white)"
              borderColor="var(--color-primary)"
              hoverBackgroundColor="var(--color-secondary)"
              hoverTextColor="var(--color-white)"
              hoverBorderColor="var(--color-secondary)"
              borderRadius="12px"
            />
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
