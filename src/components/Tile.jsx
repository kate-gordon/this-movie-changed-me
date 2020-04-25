import React from "react";
import MovieSearch from "../pages/MovieSearch";

const Tile = (props) => {
  return (
    <>
      <li
        key={props.key}
        style={{ width: "200px", height: "300px", padding: "3rem" }}
      >
        {props.children}
      </li>
    </>
  );
};

export default Tile;
