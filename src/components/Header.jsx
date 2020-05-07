import React from "react";

const Header = (props) => {
  return (
    <>
      <h1
        style={{
          fontSize: "4em",
          fontWeight: "100px",
          width: "100px",
          margin: "10px",

          fontFamily: "EB Garamond",
        }}
      >
        {props.header}
      </h1>
    </>
  );
};

export default Header;
