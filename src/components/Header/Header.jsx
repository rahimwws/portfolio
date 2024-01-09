import React from "react";
import "./Header.scss";

import logo from "../../assets/logo.svg";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header>
      <nav>
        <a href="#about">about</a>
        <a href="#skills">skills</a>
      </nav>
      <img src={logo} />
      <nav>
        <a href="#projects">projects</a>
        <a href="#contact">contact</a>
      </nav>
      <nav className="mobileNav">
        <a href="#about">about</a>
        <a href="#skills">skills</a>
        <a href="#projects">projects</a>
        <a href="#contact">contact</a>
      </nav>
    </header>
  );
};
