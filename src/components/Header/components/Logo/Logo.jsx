import React from "react";
import "../../../../App.scss";
import "../../header.scss";
import { NavLink } from "react-router-dom";

function Logo() {
  return (
    <NavLink to="/courses">
      <img
        src="https://www.pharmalive.com/wp-content/uploads/2021/04/EPAM-Systems-logo.png"
        alt="header-img"
        className="header-logo__img"
      />
    </NavLink>
  );
}

export default Logo;
