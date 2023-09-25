import React from "react";
import { Header } from "../components/Header/Header";
import { MainButton } from "../components/MainButton/MainButton";

import "../styles/home.scss";

import crown from "../assets/crown.svg";
import arrow from "../assets/arrow.svg";
import Arrow from "../assets/Arrow 2.png";

export const Home = () => {
  return (
    <>
        <Header></Header>
      <section className="Home">
        <div className="main-text">
          <h1>
            <span>Hey</span>, I’M
            <span>
              {" "}
              r
              <span>
                <img src={crown} alt="" />a
              </span>
              him{" "}
            </span>
            hu<span>day</span>kuliew
          </h1>
          <h2>
            I’m
            <span>
              {" "}
              <img src={arrow} alt="" /> UX/UI designer{" "}
            </span>
            & <span>front-end_</span>
            <span>developer</span>
          </h2>
        </div>
        <div className="container">
          <div className="item">
            <div className="link">
              <span>instagram</span>
            </div>
            <p>
              I'm a versatile web designer specializing in website design and
              development. Web2 development, graphics design, and web app
              development. With an eye for aesthetics and a passion for user
              experience. I create stunning, functional websites that captivate
              visitors
            </p>
          </div>
          <div className="item">
            <MainButton></MainButton>
            <div className="scroll">
              <button className="scrollButton">
                <img src={Arrow} alt="" />
              </button>
              <p>ScrollDown</p>
            </div>
          </div>
        </div>
      </section>
      <div className="running-text">
        <div>
          <p>
            <span>discuss your ideas</span> <span>discuss your ideas </span>
            
          </p>
        </div>
      </div>
    </>
  );
};
