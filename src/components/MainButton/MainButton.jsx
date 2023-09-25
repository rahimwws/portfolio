import React from "react";

import "./Button.scss";
import button from "../../assets/button.svg";
import { Link } from "react-router-dom";

export const MainButton = () => {
  return (
    <Link to = "tel:+99363927788">
      <div className="button">
        <img src={button} alt="" />
        <p>Let's Go</p>
      </div>
    </Link>
  );
};
