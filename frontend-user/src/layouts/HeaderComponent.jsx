import "../assets/styles/HeaderComponent.css";
import { Link, NavLink, useNavigate, useLocation } from "react-router-dom";
import logoTE from "../assets/images/logo_TE.jpg";
import { useEffect, useState } from "react";

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [user, setUser] = useState(null);
  const [showDropdown, setShowDropdown] = useState(false);

  useEffect(() => {
    const updateUser = () => {
      const storedUser = localStorage.getItem("user");
      setUser(storedUser ? JSON.parse(storedUser) : null);
      setShowDropdown(false);
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
    { label: "GIỚI THIỆU", toSection: "about" },
    { label: "TÌM KIẾM", toSection: "search" },
    { label: "DÀNH CHO GIA SƯ", to: "/hometutor" },
    { label: "DÀNH CHO HỌC VIÊN", to: "/student" },
    { label: "HƯỚNG DẪN", to: "/guide" },
    { label: "CHÍNH SÁCH", to: "/policy" },
    { label: "LIÊN HỆ", toSection: "contact" },
  ];
  const filteredNavItems = navItems.filter((item) => {
    if (!user) return true; // chưa đăng nhập → hiển thị tất cả
    if (item.to === "/hometutor" && user.role === "student") return false;
    if (item.to === "/student" && user.role === "tutor") return false;
    return true;
  });

  return (
    <header className="header">
      <div
        style={{
          background: "#ffffffff",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          maxWidth: 1400,
          margin: "0 auto",
          padding: "0 3rem",
        }}
      >
        <Link to="/" className="brand" style={{ textDecoration: "none" }}>
          <img src={logoTE} alt="EduBridge" className="site-logo" />
        </Link>

        <nav className="header-nav" style={{ display: "flex", gap: 8 }}>
          {filteredNavItems.map((item, idx) =>
            item.to ? (
              <NavLink key={idx} to={item.to} className="nav-button">
                {item.label}
              </NavLink>
            ) : (
              <button
                key={idx}
                className="nav-button"
                onClick={() => navigateAndScroll(item.toSection)}
              >
                {item.label}
              </button>
            )
          )}
        </nav>

        <div style={{ display: "flex", gap: 8, position: "relative" }}>
          {!user ? (
            <>
              <Link to="/register" className="nav-button">
                Đăng kí
              </Link>
              <Link
                to="/login"
                className="nav-button"
                style={{
                  background: "transparent",
                  color: "#007bff",
                  border: "1px solid #007bff",
                }}
              >
                Đăng nhập
              </Link>
            </>
          ) : (
            <div
              className="user-menu"
              onMouseEnter={() => setShowDropdown(true)}
              onMouseLeave={() => setShowDropdown(false)}
              style={{ cursor: "pointer" }}
            >
              <div
                style={{
                  alignItems: "right",
                  gap: 5,
                  padding: "6px 12px",

                  borderRadius: 4,
                }}
              >
                <span role="img" aria-label="user">
                  👤
                </span>
                <span>{user.full_name.split(" ").slice(-1)[0]}</span>
              </div>

              {showDropdown && (
                <div
                  style={{
                    position: "absolute",
                    top: "100%",
                    right: 0,
                    background: "#ffffffff",
                    border: "1px solid #fbf8f8ff",

                    boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
                    zIndex: 10,
                  }}
                >
                  <button
                    className="nav-button"
                    style={{ width: "100%", textAlign: "left" }}
                    onClick={() => navigate("/profile")}
                  >
                    Thông tin cá nhân
                  </button>
                  <button
                    className="nav-button"
                    style={{ width: "100%", textAlign: "left" }}
                    onClick={handleLogout}
                  >
                    Đăng xuất
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
