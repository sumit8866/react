import React from "react";
import g_1 from "./g_1.png";
import g_2 from "./g_2.png";
import g_3 from "./g_3.png";
import g_4 from "./g_4.png";
import g_5 from "./g_5.png";
import g_6 from "./g_6.png";
import g_7 from "./g_7.png";
import g_8 from "./g_8.png";
import g_9 from "./g_9.png";
import g_10 from "./g_10.png";
import g_11 from "./g_11.png";
import g_12 from "./g_12.png";
const Pages = () => {
  return (
    <div
      id="pages"
      style={{ backgroundColor: "#fff5f0", fontFamily: "sans-serif" }}
    >
      <h1 className="titleStyle">
        Our <span> Gallery </span>
      </h1>

      <div className="gallery_container">
        <div className="gallery_style">
          <div className="overlay">
            <h4>
              Dish 1<p style={{ fontSize: "16px" }}>Frist Taste</p>
            </h4>
          </div>
          <img src={g_1} alt="Dish 1" className="img-container" />
        </div>
        <div className="gallery_style">
          <div className="overlay">
            <h4>
              Dish 1<p style={{ fontSize: "16px" }}>Frist Taste</p>
            </h4>
          </div>
          <img src={g_2} alt="Dish 2" className="img-container" />
        </div>
        <div className="gallery_style">
          <div className="overlay">
            <h4>
              Dish 1<p style={{ fontSize: "16px" }}>Frist Taste</p>
            </h4>
          </div>
          <img src={g_3} alt="Dish 3" className="img-container" />
        </div>
        <div className="gallery_style">
          <div className="overlay">
            <h4>
              Dish 1<p style={{ fontSize: "16px" }}>Frist Taste</p>
            </h4>
          </div>
          <img src={g_4} alt="Dish 4" className="img-container" />
        </div>

        <div className="gallery_style">
          <div className="overlay">
            <h4>
              Dish 1<p style={{ fontSize: "16px" }}>Frist Taste</p>
            </h4>
          </div>
          <img src={g_5} alt="Dish 5" className="img-container" />
        </div>
        <div className="gallery_style">
          <div className="overlay">
            <h4>
              Dish 1<p style={{ fontSize: "16px" }}>Frist Taste</p>
            </h4>
          </div>
          <img src={g_6} alt="Dish 6" className="img-container" />
        </div>
        <div className="gallery_style">
          <div className="overlay">
            <h4>
              Dish 1<p style={{ fontSize: "16px" }}>Frist Taste</p>
            </h4>
          </div>
          <img src={g_7} alt="Dish 7" className="img-container" />
        </div>
        <div className="gallery_style">
          <div className="overlay">
            <h4>
              Dish 1<p style={{ fontSize: "16px" }}>Frist Taste</p>
            </h4>
          </div>
          <img src={g_8} alt="Dish 8" className="img-container" />
        </div>

        <div style={{ display: "none" }} className="extra-img gallery_style">
          <div className="overlay">
            <h4>
              Dish 1<p style={{ fontSize: "16px" }}>Frist Taste</p>
            </h4>
          </div>
          <img className="img-container" src={g_9} alt="Dish 9" />
        </div>

        <div style={{ display: "none" }} className="extra-img gallery_style">
          <div className="overlay">
            <h4>
              Dish 1<p style={{ fontSize: "16px" }}>Frist Taste</p>
            </h4>
          </div>
          <img className="img-container" src={g_10} alt="Dish 10" />
        </div>

        <div style={{ display: "none" }} className="extra-img gallery_style">
          <div className="overlay">
            <h4>
              Dish 1<p style={{ fontSize: "16px" }}>Frist Taste</p>
            </h4>
          </div>
          <img className="img-container" src={g_11} alt="Dish 11" />
        </div>

        <div style={{ display: "none" }} className="extra-img gallery_style">
          <div className="overlay">
            <h4>
              Dish 1<p style={{ fontSize: "16px" }}>Frist Taste</p>
            </h4>
          </div>
          <img className="img-container" src={g_12} alt="Dish 12" />
        </div>
      </div>

      <button
        id="show-more"
        onClick={() => {
          const extraImages = document.querySelectorAll(".extra-img");
          extraImages.forEach((img) => {
            img.style.display = "block";
          });
          document.getElementById("show-more").style.display = "none";
          document.getElementById("show-less").style.display = "block";
        }}
        style={{
          display: "block",
          margin: "20px auto",
          padding: "10px 20px",
          backgroundColor: "red",
          color: "white",
          fontSize: "20px",
          border: "none",
          cursor: "pointer",
        }}
      >
        Show More
      </button>

      <button
        id="show-less"
        onClick={() => {
          const extraImages = document.querySelectorAll(".extra-img");
          extraImages.forEach((img) => {
            img.style.display = "none";
          });
          document.getElementById("show-more").style.display = "block";
          document.getElementById("show-less").style.display = "none";
        }}
        style={{
          display: "none",
          margin: "20px auto",
          padding: "10px 20px",
          backgroundColor: "red",
          color: "white",
          fontSize: "20px",
          border: "none",
          cursor: "pointer",
        }}
      >
        Show less
      </button>
    </div>
  );
};

export default Pages;
