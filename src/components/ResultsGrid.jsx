import React, { useState } from "react";
import Tile from "../components/Tile";
import Button from "../components/Button";

const ResultsGrid = (props) => {
  const [selMovie, setSelectedMovie] = useState();

  let arr = () => {
    if (props.results === undefined) {
      return [];
    } else return props.results.results;
  };

  const resultArr = arr();

  let movieResults = resultArr.map(function (movie, index) {
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
          onClick={() => setSelectedMovie(props.results.results[index])}
          label='Select'
        />
      </Tile>
    );
  });

  return (
    <>
      {selMovie !== undefined ? (
        <h2>{selMovie.title}</h2>
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
