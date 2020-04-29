import React, { useContext } from "react";
import Button from "../components/Button";
import Header from "../components/Header";
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
      <Header header='This Movie Changed Me' />
      <input
        id='outlined-search'
        label='Search field'
        type='search'
        onChange={handleChangeInputTitle}
      />
      <Button onClick={handleSearchMovieSubmit} label='Search' />
      <ResultsGrid results={results} />
    </>
  );
};

export default MovieSearch;
