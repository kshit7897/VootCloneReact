import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import Slider from "react-slick";

const movie_url = `
http://www.omdbapi.com/?apikey=74170e3b&s=Animation`;

const Kids = () => {
  const [movie, setMovie] = useState([]);
  const [error, setError] = useState({ show: "false", msg: "" });

  const getMovies = async (url) => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      console.log(data);
      if (data.Response === "True") {
        setMovie(data.Search);
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
    speed: 1000,
    slidesToScroll: 1,
  };
  return (
    <div>
      <div className="banner">
        <img
          src="https://tpc.googlesyndication.com/simgad/9433996815422966152?"
          alt="#"
        />
      </div>
      <Slider {...settingss} className="topslider">
        <div className="img-div">
          <img
            className="top-img"
            src="https://v3img.voot.com/resizeHigh,w_1280,h_720/v3Storage/assets/10_16_9_1920x1080-1665860366970.jpg"
            alt="#"
          />
        </div>
        <div className="img-div">
          <img
            className="top-img"
            src="https://v3img.voot.com/resizeHigh,w_1280,h_720/v3Storage/assets/himalian-adventure-16_9_1920x1080-1663497661828.jpg"
            alt="#"
          />
        </div>
        <div className="img-div">
          <img
            className="top-img"
            src="https://v3img.voot.com/resizeHigh,w_1280,h_720/v3Storage/assets/rise-of-the-technosapiens-16_9_1920x1080-1663475496682.jpg"
            alt="#"
          />
        </div>
        <div className="img-div">
          <img
            className="top-img"
            src="https://v3img.voot.com/resizeHigh,w_1280,h_720/v3Storage/assets/pokemon-16x9-1663237785029.jpg"
            alt="#"
          />
        </div>
      </Slider>
      <div>
        <h2 className="English-text">Top Kids Cartoon </h2>
        <div className="slider-div">
          <Slider {...settings} className="English-slider">
            {movie.map((item) => {
              const { imdbID } = item;
              return (
                <div className="English-div" key={item.id}>
                  <NavLink to={`/DetailMovie/${imdbID}`}>
                    <img className="English-poster" src={item.Poster} alt="#" />
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

export default Kids;
