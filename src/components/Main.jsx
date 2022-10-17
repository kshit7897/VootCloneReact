import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
// import axios from "axios";

const movie_url = `
http://www.omdbapi.com/?apikey=74170e3b&s=Race`;

const Main = () => {
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
        console.log("movie", movie);
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

  return (
    <>
      {movie.map((item) => {
        return (
          <div className="search-img">
            <h1>{item.Title}</h1>
            <NavLink to="/DetailMovie">
              <img src={item.Poster} alt="" />
            </NavLink>
          </div>
        );
      })}
    </>
  );
};

export default Main;

// const [searchData, setSearchData] = useState([]);
// useEffect(() => {
//   async function getSearchData() {
//     const response = await axios.get(
//       "https://www.omdbapi.com/?apikey=74170e3b&s=Dexter%27);"
//     );
//     setSearchData([response.data]);
//   }
//   getSearchData();
//   console.log(searchData);
// }, []);
