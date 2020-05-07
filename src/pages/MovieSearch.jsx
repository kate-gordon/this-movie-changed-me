import React, { useContext } from "react";
import { Link, withRouter } from "react-router-dom";

import Button from "../components/Button";
import ResultsGrid from "../components/ResultsGrid";
import { MovieContext } from "../context/index";

import "./styles.css";

const MovieSearch = () => {
  const appContext = useContext(MovieContext);
  const {
    handleChangeInputTitle,
    handleSearchMovieSubmit,
    results,
    selMovie,
  } = appContext;

  const RouteButton = withRouter(({ history }) => (
    <button
      type='button'
      onClick={() => {
        
        history.push("/reflect");
      }}
    >
      Next
    </button>
  ));

  return (
    <>
      <div className='movie-search-header'>
        <div className='intro-p'>Enter Movie Title</div>
        <div className='home-link'>
          <Link to='/'>Home</Link>
        </div>
        <div className='search-box'>
          <input
            id='outlined-search'
            label='Search field'
            type='search'
            onChange={handleChangeInputTitle}
          />
          <Button onClick={handleSearchMovieSubmit} label='Search' />
        </div>
        {selMovie !== undefined ? (
          <>
            <h2 className='select'>{selMovie.title}</h2>
            <RouteButton className='route-btn' />
          </>
        ) : (
          <h2 className='select'> No Movie Selected</h2>
        )}
      </div>
      <ResultsGrid results={results} />
    </>
  );
};

export default MovieSearch;
