import React from "react";
import Header from "../components/Header";

const Main = () => {
  return (
    <>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: "80vh",
          margin: "5rem",
        }}
      >
        <Header header='This Movie Changed Me' />
        <p
          style={{
            width: "30%",
            marginRight: "20px",
            border: "2px solid black",
          }}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum similique
          temporibus, facilis quis vel autem? Corporis maiores vitae, similique
          ullam amet necessitatibus, et debitis totam repudiandae veniam iure
          vel quis?
        </p>
      </div>
    </>
  );
};

export default Main;
