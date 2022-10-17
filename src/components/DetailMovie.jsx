import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const movie_url = `
http://www.omdbapi.com/?apikey=74170e3b&i=`;

const DetailMovie = () => {
  const { id } = useParams();

  const [movie, setMovie] = useState("");

  const getMovies = async (url) => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      console.log(data);
      if (data.Response === "True") {
        setMovie(data);
        console.log("movie", movie);
      } else {
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getMovies(`${movie_url}${id}`);
  }, [id]);
  return (
    <>
      <div className="container">
        <div className="text">
          <div className="head">
            <h1 className="heading">{movie.Title}</h1>
          </div>
          <div>
            <p className="para-genre">{movie.Genre}</p>
          </div>
          <div>
            <p className="para-year">{movie.Year}</p>
          </div>

          <div>
            <p className="para-discription">{movie.Plot}</p>
          </div>
          <div>
            <p className="language">
              <span className="audio">Audio : </span>
              {movie.Language}
            </p>
          </div>
          <div>
            <p className="rating">
              <span className="audio">Imdb Rating : </span> {movie.imdbRating}
            </p>
          </div>
          <div className="btn">
            <button className="back">Back</button>
          </div>
        </div>

        <div>
          <img className="poster" src={movie.Poster} alt="voot" />
        </div>
      </div>
    </>
  );
};

export default DetailMovie;
