import React from "react";
import "./Footer.scss";

import logo from "../../assets/logo.svg";

import icon_1 from "../../assets/icons/Social Icons-1.png";
import icon_2 from "../../assets/icons/Social Icons-2.png";
import icon_3 from "../../assets/icons/Social Icons-3.png";
import icon_4 from "../../assets/icons/Social Icons.png";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer>
      <img src={logo} />
      <nav>
        <p>about</p>
        <p>skills</p>

        <p>work</p>
        <p>contact</p>
      </nav>
      <div className="icons">
        <Link to="https://t.me/rahimwws">
          <img src={icon_1} alt="" />
        </Link>
        <Link to="https://instagram.com/rahimwws77">
          <img src={icon_2} alt="" />
        </Link>
        <Link to="https://wa.me/+99363927788">
          <img src={icon_3} alt="" />
        </Link>
        <Link to="https://github.com/rahimwws">
          <img src={icon_4} alt="" />
        </Link>
      </div>
    </footer>
  );
};
