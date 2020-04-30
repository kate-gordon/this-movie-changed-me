import React from "react";

const Tile = (props) => {
  return (
    <>
      <div style={{ padding: "3rem", display: "flex" }}>{props.children}</div>
    </>
  );
};

export default Tile;
