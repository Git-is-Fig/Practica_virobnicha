import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="logo">
          <Link to="/">Untitled UI</Link>
        </div>
        <nav>
          <ul className="nav-links">
            <li><Link to="/">Products</Link></li>
            <li><Link to="/">Services</Link></li>
            <li><Link to="/">Pricing</Link></li>
            <li><Link to="/">Resources</Link></li>
            <li><Link to="/">About</Link></li>
            <li><Link to="/Category">Category</Link></li>
          </ul>
        </nav>
        <div className="auth-buttons">
          <button className="login">Log in</button>
          <button className="signup">Sign up</button>
        </div>
      </div>
    </header>
  );
};

export default Header;