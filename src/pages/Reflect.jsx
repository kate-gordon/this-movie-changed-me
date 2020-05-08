import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { MovieContext } from "../context/index";

const Reflect = () => {
  const appContext = useContext(MovieContext);
  const { selMovie } = appContext;

  const srcLink = `https://image.tmdb.org/t/p/w500${selMovie.poster_path}`;

  return (
    <>
      <div style={{ display: "flex" }}>
        <div className='home-link'>
          <Link style={{ color: "#1d1d1f" }} to='/'>
            Home
          </Link>
        </div>
        <h1>{selMovie.title}</h1>
        <div>{selMovie.release_date}</div>
        <img src={srcLink} alt={selMovie.title} />
        <div>
          Take one minute & think about the first time you saw this movie. How
          old were you? Where were you? What do you remember the most about it?
        </div>
        <button>Start</button>
      </div>
    </>
  );
};

export default Reflect;
