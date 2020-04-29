import React from "react";
import Header from "../components/Header";
import { Link } from "react-router-dom";

const Main = () => {
  return (
    <>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: "100vh",
          marginLeft: "5rem",
          marginRight: "5rem",
        }}
      >
        <div className='main-title-box'>
          <Header header='This Movie Changed Me' />
        </div>
        <div className='main-title-box'>
          <h1 style={{ fontSize: "3em" }}>
            <Link to='/experience'>What Movie Changed You? </Link>
          </h1>
        </div>
        <div className='main-title-box'>
          <ul style={{ listStyleType: "none" }}>
            <li style={{ padding: "10px" }}>The Podcast</li>
            <li style={{ padding: "10px" }}>OnBeing Studios</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Main;
