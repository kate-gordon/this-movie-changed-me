import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Button from "../components/Button";
import ResultsGrid from "../components/ResultsGrid";
import { MovieContext } from "../context/index";

const MovieSearch = () => {
  const appContext = useContext(MovieContext);
  const {
    handleChangeInputTitle,
    handleSearchMovieSubmit,
    results,
  } = appContext;

  return (
    <>
      <div
        className='movie-search-header'
        style={{ display: "flex", justifyContent: "space-around" }}
      >
        <div style={{ fontSize: "3em" }}>
          <Link style={{ color: "#1d1d1f" }} to='/'>
            Home
          </Link>
        </div>
        <input
          id='outlined-search'
          label='Search field'
          type='search'
          onChange={handleChangeInputTitle}
        />
        <Button onClick={handleSearchMovieSubmit} label='Search' />
      </div>
      <ResultsGrid results={results} />
    </>
  );
};

export default MovieSearch;
