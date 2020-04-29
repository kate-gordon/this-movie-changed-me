import React from "react";

const Tile = (props) => {
  return (
    <>
      <div style={{ width: "200px", height: "300px", padding: "3rem" }}>
        {props.children}
      </div>
    </>
  );
};

export default Tile;
