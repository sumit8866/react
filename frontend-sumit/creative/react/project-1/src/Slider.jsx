import React from "react";
import Slider from "react-slick";
import Slider_1 from "./slider-1.jpg";
import Slider_2 from "./slider-2.jpg";
import Slider_3 from "./slider-3.jpg";

function Sliders() {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 1000,
    cssEase: "linear",
  };
  return (
    <div className="slider-container" id="blog" style={{marginBottom:"50px"}}>
      <h2 className='titleStyle'>Daily <span>Blog </span> </h2>
      <Slider {...settings}>
        <div>
          <div className="slidsss">
            <div className="sild-img">
              <img src={Slider_1} alt="" />
            </div>
            <div className="content">
                <div>

              <h2>At ultrice ligula tempus auctor ipsum mauris</h2>
              <p>
                Aliqum mullam blandit tempor a sapien and gravida donec at justo
                sapien gravida donec ipsum...
              </p>
              <i class="fa-solid fa-comment"></i> 6 &nbsp;
              <i class="fa-solid fa-heart"></i> 20
                </div>
            </div>
          </div>
        </div>
        <div>
          <div className="slidsss">
            <div className="sild-img">
              <img src={Slider_2} alt="" />
            </div>
            <div className="content">
                <div>

              <h2>At ultrice ligula tempus auctor ipsum mauris</h2>
              <p>
                Aliqum mullam blandit tempor a sapien and gravida donec at justo
                sapien gravida donec ipsum...
              </p>
              <i class="fa-solid fa-comment"></i> 6 &nbsp;
              <i class="fa-solid fa-heart"></i> 20
                </div>
            </div>
          </div>
        </div>
        <div>
          <div className="slidsss">
            <div className="sild-img">
              <img src={Slider_3} alt="" />
            </div>
            <div className="content">
                <div>

              <h2>At ultrice ligula tempus auctor ipsum mauris</h2>
              <p>
                Aliqum mullam blandit tempor a sapien and gravida donec at justo
                sapien gravida donec ipsum...
              </p>
              <i class="fa-solid fa-comment"></i> 6 &nbsp;
              <i class="fa-solid fa-heart"></i> 20
                </div>
            </div>
          </div>
        </div>
        
       
        
      </Slider>
    </div>
  );
}

export default Sliders;
