import React from "react";

const Button = (props) => {
  return (
    <>
      <button style={{ fontSize: "1em" }} onClick={props.onClick}>
        {props.label}
      </button>
    </>
  );
};
export default Button;
