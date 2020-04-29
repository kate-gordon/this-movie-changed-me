import React, { useContext } from "react";
import { withRouter } from "react-router-dom";
import Tile from "../components/Tile";
import Button from "../components/Button";
import { MovieContext } from "../context/index";

const ResultsGrid = () => {
  const appContext = useContext(MovieContext);
  const { results, setSelectedMovie, selMovie } = appContext;

  let arr = () => {
    if (results.results === undefined) {
      return [];
    } else return results.results.results;
  };

  let resultArray = arr();

  const movieResults = resultArray.map(function (movie, index) {
    const srcLink = `https://image.tmdb.org/t/p/w500${movie.backdrop_path}`;
    return (
      <Tile key={movie.id} title={movie.title}>
        {movie.backdrop_path !== null ? (
          <img src={srcLink} alt={movie.title} />
        ) : (
          <h2>Image Unavailable</h2>
        )}
        {movie.title}
        <Button
          onClick={() => setSelectedMovie(results.results.results[index])}
          label='Select'
        />
      </Tile>
    );
  });

  const RouteButton = withRouter(({ history }) => (
    <button
      type='button'
      onClick={() => {
        history.push("/reflect");
      }}
    >
      Click Me!
    </button>
  ));

  return (
    <>
      {selMovie !== undefined ? (
        <>
          <h2>{selMovie.title}</h2>
          <RouteButton />
        </>
      ) : (
        <h2> No Movie Selected</h2>
      )}
      <ul
        style={{
          listStyleType: "none",
        }}
      >
        {movieResults}
      </ul>
    </>
  );
};

export default ResultsGrid;
