import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import Slider from "react-slick";

const movie_url = `
http://www.omdbapi.com/?apikey=74170e3b&s=science`;

const Gujrati = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [Gmovie, setGMovie] = useState([]);
  const [error, setError] = useState({ show: "false", msg: "" });

  const getMovies = async (url) => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      console.log(data);
      if (data.Response === "True") {
        setIsLoading(false);
        setGMovie(data.Search);
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
      <div>
        <h2 className="English-text">Top Gujrati Dubbing</h2>
        <div className="slider-div">
          <Slider {...settings} className="English-slider">
            {Gmovie.map((eitem) => {
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

export default Gujrati;
