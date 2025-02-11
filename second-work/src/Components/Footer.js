import React from "react";
import "../styles.css";

const Footer = () => {
  return (
    <footer>
      <div className="iconsFooter">
        <div className="FooterCircle1"></div>
        <div className="FooterCircle2"></div>
        <div className="FooterSquare"></div>
      </div>

      <div className="footer-section OurContact">
        <h4>Our Contact</h4>
        <p>Telegram: <a href="#MangaW">MangaW</a></p>
        <p>Help: (041) 425 277 / 425</p>
        <p>Email: MangaW@yahoo.com</p>
      </div>

      <div className="footer-section boutUs">
        <h4>About Us</h4>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Commodo amet posuere porta vitae mi accumsan. Ultricies</p>
      </div>

      <div className="footer-section sub">
        <h4>Subscribe</h4>
        <input type="text" lang="en" placeholder="Your Email" />
      </div>

      <div className="footer-section media">
        <h4>Follow Us</h4>
        <ul>
          <li><a href="#instagram"><i className="fab fa-instagram"></i></a></li>
          <li><a href="#twitter"><i className="fab fa-twitter"></i></a></li>
          <li><a href="#facebook"><i className="fab fa-facebook"></i></a></li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;