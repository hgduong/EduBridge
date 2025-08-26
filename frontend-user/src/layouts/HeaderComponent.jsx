// Layout header now uses react-router links for clean navigation
import "../assets/styles/HeaderComponent.css";
import { Link, NavLink, useNavigate, useLocation } from "react-router-dom";
import logoTE from "../assets/images/logo_TE.jpg";
import WebButton from "../components/common/WebButton";

const Header = () => {
  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      const yOffset = -60; // avoid being hidden under header
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
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

  const navigate = useNavigate();
  const location = useLocation();

  const navigateAndScroll = (id) => {
    if (location.pathname === "/" || location.pathname === "") {
      scrollToSection(id);
      return;
    }
    navigate("/", { state: { scrollTo: id } });
  };

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
          {navItems.map((item, idx) =>
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
        </div>
      </div>
    </header>
  );
};

export default Header;