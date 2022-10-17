import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider2 from "./Slider2";
import SliderSport from "./SliderSport";
import Country from "./Country";
import Kanada from "./Kanada";
import Marathi from "./Marathi";
import Tamil from "./Tamil";
import Gujrati from "./Gujrati";

function Sliders() {
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 1,
    speed: 500,
    slidesToScroll: 1,
  };
  return (
    <>
      <div className="banner">
        <img
          src="https://tpc.googlesyndication.com/simgad/9433996815422966152?

"
          alt="#"
        />
      </div>
      <Slider {...settings} className="topslider">
        <div className="img-div">
          <img
            className="top-img"
            src="https://v3img.voot.com/resizeHigh,w_1280,h_720/v3Storage/assets/candy-hindi-16x9-1643705095210.jpg"
            alt="#"
          />
        </div>
        <div className="img-div">
          <img
            className="top-img"
            src="https://v3img.voot.com/resizeHigh,w_1280,h_720/v3Storage/assets/code-m_16x9-1665302888496.jpg"
            alt="#"
          />
        </div>
      </Slider>
      <div className="language">
        <button className="language-btn">Kanada</button>
        <button className="language-btn">Marathi</button>
        <button className="language-btn">Tamil</button>
        <button className="language-btn">Gujrati</button>
        <button className="language-btn">Kids</button>
        <button className="language-btn">International Show</button>
      </div>
      <div className="tranding">
        <img
          className="tranding-img"
          src="https://v3img.voot.com/resizeMedium,w_1920,h_411/v3Storage/assets/love%20island%20-%20new%20season%20-%2014x3-1665721228640.jpg"
          alt="#"
        />
      </div>
      <Slider2 />
      <SliderSport />
      <Country />
      <Kanada />
      <Marathi />
      <Tamil />
      <Gujrati />
    </>
  );
}

export default Sliders;
