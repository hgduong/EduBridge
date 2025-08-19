// Layout header now uses react-router links for clean navigation
import "../assets/styles/HeaderComponent.css"
import { Link, NavLink, useNavigate, useLocation } from "react-router-dom";
import logoTE from '../assets/images/logo_TE.jpg'

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
   
    { label: 'Giới thiệu', toSection: 'about' },
  { label: 'Tìm kiếm', toSection: 'search' },
  { label: 'Dành cho gia sư', to: '/hometutor' },
    { label: 'Dành cho học viên', to: '/homecustomer' },
    { label: 'Hướng dẫn', to: '/guide'  },
    { label: 'Chính sách', to: '/policy'  },
    { label: 'Liên hệ', toSection: 'contact' },
  ]

  const navigate = useNavigate();
  const location = useLocation();

  const navigateAndScroll = (id) => {
    // If we're already on home, just scroll
    if (location.pathname === '/' || location.pathname === '') {
      scrollToSection(id);
      return;
    }
    // otherwise navigate to home and pass requested section in state
    navigate('/', { state: { scrollTo: id } });
  }

  return (
    <header className="header">
      <div style={{ background: '#ffffffff', display: 'flex', alignItems: 'center', justifyContent: 'space-between', maxWidth: 1400, margin: '0 auto', padding: '0 3rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <Link to="/" className="brand" style={{ textDecoration: 'none' }}>
            <img src={logoTE} alt="EduBridge" className="site-logo" />

          </Link>
        </div>

        <nav className="header-nav" style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
          {navItems.map((item, idx) => (
            item.to ? (
              <NavLink key={idx} to={item.to} className="nav-button">{item.label}</NavLink>
            ) : item.toSection ? (
              <button key={idx} className="nav-button" onClick={() => navigateAndScroll(item.toSection)}>{item.label}</button>
            ) : (
              <button key={idx} className="nav-button" onClick={item.action}>{item.label}</button>
            )
          ))}
        </nav>

        <div style={{ display: 'flex', gap: 8 }}>
          <Link to="/register" className="nav-button">Đăng kí</Link>
          <Link to="/login" className="nav-button" style={{ background: 'transparent', color: '#007bff', border: '1px solid #007bff' }}>Đăng nhập</Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
