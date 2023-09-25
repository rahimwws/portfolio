import React from "react";
import "./Header.scss";

import logo from "../../assets/logo.svg";

export const Header = () => {
  return (
    <header>
      <nav>
        <p>about</p>
        <p>skills</p>
      </nav>
      <img src={logo} />
      <nav>
        <p>work</p>
        <p>contact</p>
      </nav>
      <nav className="mobileNav">
        <p>about</p>
        <p>skills</p>
        <p>work</p>
        <p>contact</p>
      </nav>
    </header>
  );
};
