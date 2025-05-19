import React from "react";
import team_1 from "./team_1.png";
import team_2 from "./team_2.png";
import team_3 from "./team_3.png";
import Slider from "react-slick";
import brand_1 from "./brand_1.png";
import brand_2 from "./brand_2.png";
import brand_3 from "./brand_3.png";
import brand_4 from "./brand_4.png";
import brand_5 from "./brand_5.png";
import brand_6 from "./brand_6.png";
const Team = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 1000,
    cssEase: "linear",
  };
  return (
    <>
      <div>
        <h2 className="titleStyle">
          Our <span>Team </span>
        </h2>

        <div className="containerStyle">
          <div className="cardStyle">
            <img
              src={team_1}
              alt="Cathy"
              style={{ width: "100%", borderRadius: "8px" }}
            />
            <h3 style={{ margin: "10px 0" }}>Cathy Aenderson</h3>
            <p style={{ color: "gray" }}>Chief Executive</p>
          </div>

          <div className="cardStyle">
            <img
              src={team_2}
              alt="Mike"
              style={{ width: "100%", borderRadius: "8px" }}
            />
            <h3 style={{ margin: "10px 0" }}>Mike Dooley</h3>
            <p style={{ color: "gray" }}>Executive</p>
          </div>

          <div className="cardStyle">
            <img
              src={team_3}
              alt="Alextina"
              style={{ width: "100%", borderRadius: "8px" }}
            />
            <h3 style={{ margin: "10px 0" }}>Alextina Jimiey</h3>
            <p style={{ color: "gray" }}>Food Inspector</p>
          </div>
        </div>
      </div>

      <div>
        <div
          className="slider-container"
          style={{
            width: "100%",
            margin: "auto",
            marginTop: "100px",
            marginBottom: "50px",
          }}
        >
          <Slider {...settings}>
            <div>
              <img style={{ width: "50%" }} src={brand_1} alt="" />
            </div>
            <div>
              <img style={{ width: "50%" }} src={brand_2} alt="" />
            </div>
            <div>
              <img style={{ width: "50%" }} src={brand_3} alt="" />
            </div>
            <div>
              <img style={{ width: "50%" }} src={brand_4} alt="" />
            </div>
            <div>
              <img style={{ width: "50%" }} src={brand_5} alt="" />
            </div>
            <div>
              <img style={{ width: "50%" }} src={brand_6} alt="" />
            </div>
          </Slider>
        </div>
      </div>
    </>
  );
};

export default Team;
