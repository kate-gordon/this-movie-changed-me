import React, { useState, useEffect } from "react";
import axios from "axios";

const MovieContext = React.createContext();

const apiKey = `7a5e08206be3323eb3abdd03cd7b1d8c`;

const MovieProvider = (props) => {
  const [results, setMovieResults] = useState([]);
  const [movie, setSearchMovie] = useState("");
  const [selMovie, setSelectedMovie] = useState();

  const handleChangeInputTitle = async (e) => {
    e.preventDefault();
    setSearchMovie({ movie: e.target.value });
  };

  // Movie search

  const handleSearchMovieSubmit = async (e) => {
    const movieSearch = encodeURIComponent(`${movie.movie}`);
    const res = await axios(
      `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=en-US&query=${movieSearch}&page=1&include_adult=false`
    );
    const results = await res.data;
    setMovieResults({ results: results });
  };

  return (
    <MovieContext.Provider
      value={{
        movie,
        results,
        selMovie,
        handleChangeInputTitle,
        handleSearchMovieSubmit,
        setSelectedMovie,
      }}
    >
      {props.children}
    </MovieContext.Provider>
  );
};

export { MovieProvider, MovieContext };
