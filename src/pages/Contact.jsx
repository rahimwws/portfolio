import React from "react";

import "../styles/contact.scss";
import { MainButton } from "../components/MainButton/MainButton";

import stars from "../assets/Group 13.png";
import { Footer } from "../components/Footer/Footer";

export const Contact = () => {
  return (
    <section className="Contact">
      <div className="image">
        <div className="line"></div>
        <img src={stars} alt="" />
        <div className="line"></div>
      </div>
      <div className="container">
        <div className="text">
          <h1>
            <span>Do </span>
            <span>you </span>
            <span>have </span>project?
            <span>Let’s discuss with </span>
            <span>me </span>
            <span>.</span>
          </h1>
        </div>
        <MainButton></MainButton>
      </div>
      <div className="line"></div>
      <div className="footer"><Footer/></div>
    </section>
  );
};
