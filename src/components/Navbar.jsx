import React from "react";

const Navbar = () => {
  return (
    <ul
      style={{
        listStyleType: "none",
        display: "flex",
        justifyContent: "flex-end",
      }}
    >
      <li style={{ margin: "5px", padding: "5px" }}>Home</li>
      <li style={{ margin: "5px", padding: "5px" }}>The Experience</li>
    </ul>
  );
};

export default Navbar;
