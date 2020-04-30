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
        <Link style={{ color: "#1d1d1f" }} to='/experience'>
          <div className='main-title-box exp'>
            <div style={{ fontSize: "3em" }}>Experience </div>
          </div>
        </Link>

        <div className='main-title-box links'>
          <ul style={{ listStyleType: "none" }}>
            <li style={{ padding: "10px", fontSize: "2em" }}>The Podcast</li>
            <li style={{ padding: "10px", fontSize: "2em" }}>
              OnBeing Studios
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Main;
