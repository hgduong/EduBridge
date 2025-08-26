// src/components/Footer.jsx
// const Footer = () => (
//   <footer style={footerStyle}>
//     <p>© 2025 Thousands Education. Design by Duong.</p>
//     <p>Liên hệ: Zalo | Email | Hotline</p>
//   </footer>
// );

// export default Footer;

// const footerStyle = {
//   padding: "24px",
//   background: "var(--color-white)",
//   color: "#181717ff",
//   textAlign: "center",
//   fontWeight: 600,
//   borderTop: "1px solid #e0e0e0",
//   boxShadow: "0 -2px 6px rgba(0, 0, 0, 0.05)",
// };


// src/components/Footer.jsx
import { Link } from "react-router-dom";
import "../assets/styles/FooterComponent.css";
import logoTE from "../assets/images/logo_TE.jpg";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        
        {/* Logo + Social */}
        <div className="footer-brand">
          <Link to="/" className="footer-logo">
            <img src={logoTE} alt="EduBridge" />
            <span>EduBridge</span>
          </Link>
        </div>

        {/* Link columns */}
        <div className="footer-links">
          <div>
            <h4>About Us</h4>
            <Link to="/about">Our Story</Link>
            <Link to="/team">Team</Link>
            <Link to="/careers">Careers</Link>
            <Link to="/contact">Contact</Link>
          </div>
          <div>
            <h4>Company</h4>
            <Link to="/services">Services</Link>
            <Link to="/pricing">Pricing</Link>
            <Link to="/blog">Blog</Link>
            <Link to="/faq">FAQ</Link>
          </div>
          <div>
            <h4>Legacy</h4>
            <Link to="/policy">Policy</Link>
            <Link to="/terms">Terms</Link>
            <Link to="/privacy">Privacy</Link>
          </div>
          <div>
            <h4>Resources</h4>
            <Link to="/guide">Guide</Link>
            <Link to="/support">Support</Link>
            <Link to="/docs">Docs</Link>
            <Link to="/community">Community</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
