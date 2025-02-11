import React from "react";
import { Link } from "react-router-dom";
import "../styles.css";
import { showPopup, closePopup } from "../functions";

const Header = () => {

  return (
    <header>
      <div id="popup">
          <h2>Contact Us</h2>
          <p>Email: MangaW@yahoo.com</p>
          <p>Phone: +123456789</p>
          <button id="closePopup" onClick={() => closePopup()}>Close</button>
        </div>
      <div className="navigation">
        <nav>
          <div className="iconsNav">
            <div className="NavCircle1"></div>
            <div className="NavCircle2"></div>
            <div className="NavSquare"></div>
          </div>
          <ul>
            <li><Link to="/home">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/news">News</Link></li>
            <li><button id="Contact" onClick={showPopup}>Contact</button></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;