import React from "react";

import "../styles/project.scss";
import "../styles/contact.scss";

import project_1 from "../assets/projects/image 6.jpg";
import project_2 from "../assets/projects/Cover 2.jpg";
import project_3 from "../assets/projects/image 7.png";
import project_4 from "../assets/projects/post-1.jpg";
import project_5 from "../assets/projects/post-2.jpg";
import { MainButton } from "../components/MainButton/MainButton";
import { Link } from "react-router-dom";

export const Project = () => {
  return (
    <section className="project" id="projects">
      <div className="main-text">
        <h1>
          Projects <span> .</span>
        </h1>
        <p>
          Bringing Your Ideas To Life <br /> Through Me And My Experience
        </p>
      </div>
      <div className="container">
        <div className="main-item">
          <div className="item">
            <Link to="https://ai-rahimwws.vercel.app/">
              <img src={project_1} alt="" />
              <p>Web Site</p>
            </Link>
          </div>
          <div className="item">
            <Link to="https://www.figma.com/file/hN0wFO0HoBgWZVaTG5CYiW/Smart-Home-App-(Community)?type=design&mode=design&t=v5kCxoS9m2Gs821r-0">
              <img src={project_2} alt="" />
              <p>UI/UX design</p>
            </Link>
          </div>
          <div className="item">
            <Link to="https://nike-page-phi.vercel.app/">
              <img src={project_3} alt="" />
              <p>Web site</p>
            </Link>
          </div>
          <div className="item">
            <Link to="https://www.figma.com/file/eh6VqOuCkCAJJ8gU1rtNGA/Fashion?type=design&node-id=0-1&mode=design&t=v5kCxoS9m2Gs821r-0">
              <img src={project_4} alt="" />
              <p>UI/UX design</p>
            </Link>
          </div>
          <div className="item">
            <Link to="https://www.figma.com/file/3T18WJqTgJBXRTceNvOAX7/e-commerce?type=design&node-id=2-2&mode=design&t=v5kCxoS9m2Gs821r-0">
              <img src={project_5} alt="" />
              <p>UI/UX design</p>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
