import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import Slider from "react-slick";

export const movie_url = `
http://www.omdbapi.com/?apikey=74170e3b&s=English`;

const Slider2 = () => {
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
  };
  return (
    <div>
      <h2 className="English-text">Top English Pick</h2>
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
  );
};

export default Slider2;
