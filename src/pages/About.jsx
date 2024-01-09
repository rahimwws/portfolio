import React from "react";

import "../styles/about.scss";

import arrow from "../assets/Arrow 1.svg";
import crown from "../assets/crown.svg";

export const About = () => {
  return (
    <section className="About" id="about">
      <div className="container">
        <div className="text">
          <div className="main-text">
            <h1>
              About
              <span> me</span>
              <span>
                <img src={arrow} alt="" /> .
              </span>
            </h1>
          </div>
          <p>
            <span>H</span>
            ey, my name is Rahim Hudaykuliew and I use rahimwws as my nickname
            across social medias. I’m an UX/UI <span>designer</span> &{" "}
            <span>front-end</span> web and mobile developer from Turkmenistan.
            I’m also passionate about pop music and make portraits and universes
            around what I listen to and I’m always curious to learn more when it
            comes to new technologies and creative coding.
          </p>
          <div className="skills">
            <div className="item">
              <h2>2</h2>
              <p>Years Experience</p>
            </div>
            <div className="item">
              <h2>5+</h2>
              <p>Project</p>
            </div>
            <div className="item">
              <h2>5+</h2>
              <p>Clients</p>
            </div>
          </div>
        </div>
        <div className="name">
          <h1>
            {" "}
            <span>R</span>
            <span>
              <img src={crown} alt="" />a
            </span>
            <span>him </span>
            Hu
            <span>day</span>kuliew
          </h1>
        </div>
      </div>
    </section>
  );
};
