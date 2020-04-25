import React from "react";

const Header = (props) => {
  return (
    <>
      <h1
        style={{
          fontSize: "4em",
          width: "100px",
          margin: "10px",
        }}
      >
        {props.header}
      </h1>
    </>
  );
};

export default Header;
