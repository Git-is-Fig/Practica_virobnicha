import React, { useEffect } from "react";
import "../styles.css";
import { showPopup, closePopup, toggleContent, setActiveLink } from "../functions";

const About = () => {
  useEffect(() => {
        setActiveLink();
  }, []);
  return (
    
    <main id="general">
      {showPopup && (
        <div id="popup">
          <h2>Contact Us</h2>
          <p>Email: MangaW@yahoo.com</p>
          <p>Phone: +123456789</p>
          <button id="closePopup" onClick={() => showPopup(false)}>Close</button>
        </div>
      )}
      <div className="container">
        <img id="AboutIMG" src="./assets/image.webp" alt="About" />
        <div className="text-content">
          <p className="Bout">ABOUT US</p>
          <h1 className="Read">Read Exciting Stories On Our Website With The Help Of Our Sponsors</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Commodo amet
            posuere porta vitae mi accumsan. Ultricies
          </p>
          <div id="LearnButton">
              <div id="content-area">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Commodo amet
                  posuere porta vitae mi accumsan. Ultricies
                </p>
              </div>
            <button
              id="LearnMore"
              onClick={() => toggleContent()}>
              Learn More
            </button>

            <div id="popup" className="popup">
              <h2>Contact Us</h2>
              <p>Email: MangaW@yahoo.com</p>
              <p>Phone: +123456789</p>
              <button id="closePopup" onClick={closePopup}>Close</button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default About;