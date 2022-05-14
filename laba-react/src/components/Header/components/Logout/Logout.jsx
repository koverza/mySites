import React from "react";
import "./logout.scss";
import { NavLink} from 'react-router-dom';


function Logout(props) {
  return (
    <div className="registration">
      <div className="registration-box">
        <h2 className="registration-title">{props.name}</h2>
        <div className="registration-block">
          <span className="registration-block__title title">Name</span>
          <input
            type="text"
            className="registration-block__input input"
            placeholder="Enter name"
          />
        </div>
        <div className="registration-block">
          <span className="registration-block__title title">Email</span>
          <input
            type="email"
            className="registration-block__input input"
            placeholder="Enter email"
          />
        </div>
        <div className="registration-block">
          <span className="registration-block__title title">Password</span>
          <input
            type="password"
            className="registration-block__input input"
            placeholder="Enter password"
          />
        </div>
        <button className="registration-button button">{props.name}</button>
        <span>
          If you have an account you can{" "}
          <NavLink to="/login" className="registration-link">Login</NavLink>
        </span>
      </div>
    </div>
  );
}

export default Logout;
