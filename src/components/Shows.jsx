import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import Slider from "react-slick";

const movie_url = `
http://www.omdbapi.com/?apikey=74170e3b&s=part`;

const Shows = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [movie, setMovie] = useState([]);
  const [error, setError] = useState({ show: "false", msg: "" });

  const getMovies = async (url) => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      console.log(data);
      if (data.Response === "True") {
        setIsLoading(false);
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
            src="https://v3img.voot.com/resizeHigh,w_1280,h_720/v3Storage/assets/big-buzz-ep-2-16x9-carousel-1665890638043.jpg"
            alt="#"
          />
        </div>
        <div className="img-div">
          <img
            className="top-img"
            src="https://v3img.voot.com/resizeHigh,w_1280,h_720/v3Storage/assets/jdj-16x9%20(1)-1663399278841.jpg"
            alt="#"
          />
        </div>
        <div className="img-div">
          <img
            className="top-img"
            src="https://v3img.voot.com/resizeHigh,w_1280,h_720/v3Storage/assets/naagin%2016x9-1665251517228.jpg"
            alt="#"
          />
        </div>
        <div className="img-div">
          <img
            className="top-img"
            src="https://v3img.voot.com/resizeHigh,w_1280,h_720/v3Storage/assets/shark-tank-s2_16x9-1664038731872.jpg"
            alt="#"
          />
        </div>
      </Slider>
      <div>
        <h2 className="English-text">Premium Shows Top Pick </h2>
        <div className="slider-div">
          <Slider {...settings} className="English-slider">
            {movie.map((eitem) => {
              const { imdbID } = eitem;
              return (
                <div className="English-div">
                  <NavLink to={`/DetailMovie/${imdbID}`}>
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

export default Shows;
