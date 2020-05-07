import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { MovieContext } from "../context/index";

import MovieSearch from "./MovieSearch";

const Reflect = () => {
  const appContext = useContext(MovieContext);
  const { selMovie } = appContext;

  return (
    <>
      <div className='home-link'>
        <Link style={{ color: "#1d1d1f" }} to='/'>
          Home
        </Link>
      </div>
      <h1>Carol</h1>
      <div> poster and date released</div>
      <div >
        Take one minute & think about the first time you saw this movie. How old
        were you? Where were you? What do you remember the most about it?>
      </div>
      <button>Start</button>
    </>
  );
};

export default Reflect;
