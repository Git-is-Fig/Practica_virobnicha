import React, { useEffect } from "react";
import "../styles.css";
import { toggleText, setActiveLink, closePopup } from "../functions";

const NewsItem = ({ image, text }) => {
  return (
    <div className="NewsItem">
      <img src={image} alt="news" className="NewsIMG" />
      <p className="NewsText">
        {text}
        <span className="HiddenText">
          - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Commodo amet posuere porta vitae mi accumsan. Ultricies.
        </span>
      </p>
      <button className="ReadMoreBtn" onClick={(e) => toggleText(e.target)}>
        Read More
      </button>
    </div>
  );
};

const News = () => {
  useEffect(() => {
    setActiveLink();
  }, []);

  return (
    <main id="general">
      <div id="News">
        <h1 className="Read">Read Our News</h1>
        <div className="NewsContainer">
          <NewsItem image="./assets/images.jpg" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit " />
          <NewsItem image="./assets/images (1).jpg" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit " />
          <NewsItem image="./assets/images (2).jpg" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit " />
        </div>
      </div>
      <div id="popup" className="popup">
        <h2>Contact Us</h2>
        <p>Email: MangaW@yahoo.com</p>
        <p>Phone: +123456789</p>
        <button id="closePopup" onClick={closePopup}>Close</button>
      </div>
    </main>
  );
};

export default News;