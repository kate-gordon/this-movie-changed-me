import React, { useContext } from "react";

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
    const srcLink = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
    const backLink = `https://image.tmdb.org/t/p/w500${movie.backdrop_path}`;
    return (
      <Tile key={movie.id} title={movie.title}>
        {movie.poster_path !== null ? (
          <img src={srcLink} alt={movie.title} />
        ) : (
          <img src={backLink} alt={movie.title} />
        )}

        {movie.title}
        <Button
          onClick={() => setSelectedMovie(results.results.results[index])}
          label='Select'
        />
      </Tile>
    );
  });

  return (
    <>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
          gridGap: "10px",
        }}
      >
        {movieResults}
      </div>
    </>
  );
};

export default ResultsGrid;
