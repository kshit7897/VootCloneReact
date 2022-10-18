import React, { useState, useEffect } from "react";
import axios from "axios";

// const movie_url = `
// http://www.omdbapi.com/?apikey=74170e3b`;

const Main = (props) => {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState(props.idata);

  const getApi = async (key) => {
    // const res = await axios.get("http://fakestoreapi.com/products");
    if (key === "") {
      key = "space";
    }

    const res = await axios.get(
      `http://www.omdbapi.com/?apikey=74170e3b&s=${key}`
    );
    // const res = await axios.get(movie_url);
    setData(res.data.Search);
  };
  useEffect(() => {
    getApi(props.idata);
  }, [props.idata]);

  return (
    <>
      <div className="Search-container">
        {data
          ?.filter((val) => {
            if (props.idata === "") {
              return val;
            } else if (
              val.Title.toLowerCase().startsWith(props.idata.toLowerCase())
            ) {
              return val;
            }
          })

          .map((item) => (
            <div className="bowl" key={item.id}>
              <div className="search-div">
                <div className="search-head-div">
                  <p className="search-head">{item.Title}</p>
                </div>
                <img className="search-image" src={item.Poster} alt="kshit" />
              </div>
              <h3 className="search-year">{item.Year}</h3>
            </div>
          ))}
      </div>
    </>
  );
};

export default Main;

//  const [movie, setMovie] = useState([props.idata]);
//  const [error, setError] = useState({ show: "false", msg: "" });

//  const getMovies = async (url) => {
//    try {
//      const response = await fetch(url);
//      const data = await response.json();
//      console.log(data);
//      if (data.Response === "True") {
//        setMovie(data.Search);
//        console.log("movie", movie);
//      } else {
//        setError({
//          show: "true",
//          msg: data.error,
//        });
//      }
//    } catch (error) {
//      console.log(error);
//    }
//  };

//  useEffect(() => {
//    getMovies(`${movie_url}&s=${movie}`);
//  }, []);

//  {
//    movie.map((item) => {
//      return (
//        <div className="search-img">
//          <h1>{item.Title}</h1>
//          <NavLink to="/DetailMovie">
//            <img src={item.Poster} alt="" />
//          </NavLink>
//        </div>
//      );
//    });
//  }
