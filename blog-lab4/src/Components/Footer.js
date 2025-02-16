import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <div className="logo-footer">Untitled UI</div>
          <nav>
            <ul className="footer-links">
              <li><span>Overview</span></li>
              <li><span>Features</span></li>
              <li><span>Pricing</span></li>
              <li><span>Careers</span></li>
              <li><span>Help</span></li>
              <li><span>Privacy</span></li>
            </ul>
          </nav>
          <div className="subscribe">
            <p className="update">Stay up to date</p>
            <input type="email" placeholder="Enter your email" />
            <button>Subscribe</button>
          </div>
        </div>
        <div className="footer-bottom">
        <p className="pol">© 2025 Untitled UI. All rights reserved.</p>
        <ul className="other-links">
            <li><span>Terms</span></li>
            <li><span>Privacy</span></li>
            <li><span>Cookies</span></li>
        </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;