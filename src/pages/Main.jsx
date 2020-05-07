import React from "react";
import Header from "../components/Header";
import { Link } from "react-router-dom";
import "./styles.css";

const Main = () => {
  return (
    <>
      <div className='grid-container'>
        <div className='main-title-box tmcm'>
          <Header header='This Movie Changed Me' />
        </div>
        <p className='intro'>
          Welcome! This is a web experience in honor of the This Movie Changed
          Me podcast. Take a moment to explore & revisit some of your most
          impactful movie experiences
        </p>
        <div className='exp'>
          <Link style={{ color: "#504673", fontSize: "3em" }} to='/experience'>
            ENTER
          </Link>
        </div>
        <div className='links'>
          <ul
            style={{
              listStyleType: "none",
              display: "flex",
              justifyContent: "space-around",
            }}
          >
            <li style={{ padding: "10px", fontSize: "1em" }}>The Podcast</li>
            <li style={{ padding: "10px", fontSize: "1em" }}>
              OnBeing Studios
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Main;
