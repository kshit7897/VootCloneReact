import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import Slider from "react-slick";

const movie_url = `
http://www.omdbapi.com/?apikey=74170e3b&s=football`;

const Sport = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [Pmovie, setPMovie] = useState([]);
  const [error, setError] = useState({ show: "false", msg: "" });

  const getMovies = async (url) => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      console.log(data);
      if (data.Response === "True") {
        setIsLoading(false);
        setPMovie(data.Search);
        // console.log("movie", Emovie);
      } else {
        setError({
          show: "true",
          msg: data.error,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getMovies(movie_url);
  }, []);
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 5,
    speed: 500,
    rows: 1,
  };
  const settingss = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 1,
    speed: 500,
    slidesToScroll: 1,
  };
  return (
    <div>
      <div className="banner">
        <img
          src="https://tpc.googlesyndication.com/simgad/12892210046912269778?"
          alt="#"
        />
      </div>
      <Slider {...settingss} className="topslider">
        <div className="img-div">
          <img
            className="top-img"
            src="https://v3img.voot.com/resizeHigh,w_1280,h_720/v3Storage/assets/scottish-professional-football-league-motherwell%20vs%20rangers%20-16x9-1665915834373.jpg"
            alt="#"
          />
        </div>
        <div className="img-div">
          <img
            className="top-img"
            src="https://v3img.voot.com/resizeHigh,w_1280,h_720/v3Storage/assets/le-classiqe-16x9-1665754602365.jpg"
            alt="#"
          />
        </div>
        <div className="img-div">
          <img
            className="top-img"
            src="https://v3img.voot.com/resizeHigh,w_1280,h_720/kimg/kimg/ce7ea350f7b54dde93a9dc302299b347_1280X720.jpg"
            alt="#"
          />
        </div>
        <div className="img-div">
          <img
            className="top-img"
            src="https://v3img.voot.com/resizeHigh,w_1280,h_720/kimg/kimg/034028c498e640ea954135ef7792fa42_1280X720.jpg"
            alt="#"
          />
        </div>
      </Slider>
      <div>
        <h2 className="English-text">Premium Sport Top Pick </h2>
        <div className="slider-div">
          <Slider {...settings} className="English-slider">
            {Pmovie.map((eitem) => {
              return (
                <div className="English-div">
                  <NavLink to="/DetailMovie">
                    <img
                      className="English-poster"
                      src={eitem.Poster}
                      alt="#"
                    />
                  </NavLink>
                </div>
              );
            })}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Sport;
