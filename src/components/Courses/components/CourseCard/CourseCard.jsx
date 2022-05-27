import React from "react";
import { NavLink } from "react-router-dom";
import Button from "../../../../common/Button/Button";
import "../CourseCard/card.scss";

function CourseCard(props) {
  return (
    <div className="course">
      <div className="course-text">
        <h2 className="course-title">{props.title}</h2>
        <p className="course-subtitle">{props.description}</p>
      </div>
      <div className="course-information">
        <div className="information-block">
          <span className="information-title">Authors:</span>
          <span className="information-text">{props.authors}</span>
        </div>
        <div className="information-block">
          <span className="information-title">Duration:</span>
          <span className="information-text">{props.duration}</span>
        </div>
        <div className="information-block">
          <span className="information-title">Created:</span>
          <span className="information-text">{props.creationDate}</span>
        </div>
        <NavLink to="/add">
          <Button name="Show Course" />
        </NavLink>
      </div>
    </div>
  );
}

export default CourseCard;
