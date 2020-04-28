import React, { useState } from "react";
import Button from "../components/Button";
import Header from "../components/Header";
import ResultsGrid from "../components/ResultsGrid";
import axios from "axios";

const MovieSearch = () => {
  const [results, setMovieResults] = useState([]);
  const [movie, setSearchMovie] = useState("");

  const handleChangeInputTitle = async (e) => {
    e.preventDefault();
    setSearchMovie({ movie: e.target.value });
  };

  // Movie search

  const handleSearchMovieSubmit = async (e) => {
    const movieSearch = encodeURIComponent(`${movie.movie}`);
    const res = await axios(
      `https://api.themoviedb.org/3/search/movie?api_key=7a5e08206be3323eb3abdd03cd7b1d8c&language=en-US&query=${movieSearch}&page=1&include_adult=false`
    );
    const results = await res.data;
    setMovieResults({ results: results });
  };

  return (
    <>
      <Header header='This Movie Changed Me' />
      <input
        id='outlined-search'
        label='Search field'
        type='search'
        onChange={handleChangeInputTitle}
      />
      <Button onClick={handleSearchMovieSubmit} label='Search' />
      <ResultsGrid results={results.results} />
    </>
  );
};

export default MovieSearch;
