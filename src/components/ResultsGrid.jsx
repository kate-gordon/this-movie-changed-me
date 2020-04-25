import React from "react";
import Tile from "../components/Tile";
import Button from "../components/Button";

const ResultsGrid = (props) => {
  let arr = () => {
    if (props.results === undefined) {
      return [];
    } else return props.results.results;
  };

  const handleClick = (e) => {
    console.log("clicked");
  };

  const resultArr = arr();

  let movieResults = resultArr.map(function (movie) {
    const srcLink = `https://image.tmdb.org/t/p/w500${movie.backdrop_path}`;
    return (
      <Tile key={movie.id} title={movie.title}>
        {movie.backdrop_path !== null ? (
          <img src={srcLink} alt={movie.title} />
        ) : (
          <h2>Image Unavailable</h2>
        )}
        {movie.title}
        <Button onClick={handleClick} label='Select' />
      </Tile>
    );
  });

  return (
    <>
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
