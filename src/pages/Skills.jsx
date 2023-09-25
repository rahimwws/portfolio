import React, { useState } from "react";

import "../styles/skills.scss";
import arrow from "../assets/Arrow 3.svg";

export const Skills = () => {
  const [skill, setSkill] = useState("none");
  return (
    <section className="Skill">
      <div className="main-text">
        <h1>
          <span>My</span> Ski<span>ll</span>s <span>.</span>
        </h1>
        <p>
          in each of the areas, <br /> I try to do with my soul
        </p>
      </div>
      <div className="skills">
        <div className="item">
          <h2>
            <span>ui/ux</span> design
          </h2>
          <button>
            <img
              src={arrow}
              alt=""
              // onClick={() =>
              //   skill == "none" ? setSkill("skill-item") : setSkill("none")
              // }
            />
          </button>
        </div>
        <div className={skill}>
          <button>
            <p>Figma</p>
          </button>
        </div>
       
        <div className="item">
          <h2>
            <span className="mobile">mobile</span> development
          </h2>
          <button>
            <img src={arrow} alt="" />
          </button>
        </div>
        <div className="item">
          <h2>
            <span className="back">back-end</span> development
          </h2>
          <button>
            <img src={arrow} alt="" />
          </button>
        </div>
      </div>
    </section>
  );
};
