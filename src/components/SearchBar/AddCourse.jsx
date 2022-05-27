import React from "react";
import { NavLink } from "react-router-dom";

function AddCourse(props) {
  return (
    <NavLink to="/create">
      <button className="button-add button">{props.name}</button>
    </NavLink>
  );
}

export default AddCourse;
