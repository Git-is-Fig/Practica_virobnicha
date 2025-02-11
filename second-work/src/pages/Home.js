import React, { useEffect } from "react";
import "../styles.css";
import { setActiveLink } from "../functions";

const Home = () => {
  useEffect(() => {
      setActiveLink(); // Встановлення активного посилання
  }, []);

  function showPopup() {
    let popup = document.getElementById("popup");
    if (popup) {
      popup.classList.add("show");
    }
  }

  function closePopup() {
    let popup = document.getElementById("popup");
    if (popup) {
      popup.classList.remove("show");
    }
  }

  return (
    <main id="general">
      <p className="mission">Our mission is share, your mission is reading</p>
      <h1 className="gen">We are sharing manga/manhwa/manhua</h1>
      <h1 className="gen">from different sources</h1>
      
      <button id="getInTouch" onClick={showPopup}>Get in touch</button>

      <div id="popup" className="popup">
        <h2>Contact Us</h2>
        <p>Email: MangaW@yahoo.com</p>
        <p>Phone: +123456789</p>
        <button id="closePopup" onClick={closePopup}>Close</button>
      </div>

      <div className="sources-container">
        <div className="source1">
          <div className="logo-container">
            <img id="mangaInUa" src="./assets/завантаження.png" alt="MangaInUa" />
          </div>
          <h4><a href="https://manga.in.ua">Manga in ua</a></h4>
          <p className="manga">Manga.in.ua - manga online in Ukrainian</p>
        </div>

        <div className="source2">
          <div className="logo-container">
            <img id="Viz" src="./assets/завантаження (1).png" alt="VIZ" />
          </div>
          <h4><a href="https://www.viz.com">VIZ Media</a></h4>
          <p className="manga">VIZ | The Best in Manga, Anime & Global Entertainment</p>
        </div>

        <div className="source3">
          <div className="logo-container">
            <img id="Line" src="./assets/завантаження (2).png" alt="LineManga" />
          </div>
          <h4><a href="https://manga.line.me">ストア｜LINE マンガ</a></h4>
          <p className="manga1">
            A rich lineup of about 430,000 items, including manga that have been made into movies and animated cartoons!
            The store section, which carries even the latest editions, is always offering special one-volume free and multiple-volume free campaigns!
          </p>
        </div>
      </div>

      <section id="Contacts">
        <h1 style={{ color: "white", margin: "90px" }}>We like to start your reading with us</h1>
        <button id="getInTouch2" onClick={showPopup}>Get in Touch</button>
      </section>
    </main>
  );
};

export default Home;