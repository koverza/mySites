import React from "react";
import { NavLink } from "react-router-dom";
import Input from "../../../../common/Input/Input";
import Button from "../../../../common/Button/Button";
import "./registration.scss";

function Registration() {
  // const newUser = {
  //   name,
  //   password,
  //   email,
  //   };
  //   const response = await fetch('http://localhost:3000/register', {
  //   method: 'POST',
  //   body: JSON.stringify(newUser),
  //   headers: {
  //   'Content-Type': 'application/json',
  //   },
  //   });
  //   const result = await response.json();

  //   function registration(e) {
  //   e.preventDefault()
  //   console.log('click')
  // }
  return (
    <form className="registration">
      <div className="registration-box">
        <h2 className="registration-title">Registration</h2>
        <div className="registration-block">
          <span className="registration-block__title title">Name</span>
          <Input type="text" placeholder="Enter name" />
        </div>
        <div className="registration-block">
          <span className="registration-block__title title">Email</span>
          <Input type="email" placeholder="Enter email" />
        </div>
        <div className="registration-block">
          <span className="registration-block__title title">Password</span>
          <Input type="password" placeholder="Enter password" />
        </div>
        <Button name={'Registration'}/>
        <span>
          If you have an account you can{" "}
          <NavLink to="/login" className="registration-link">
            Login
          </NavLink>
        </span>
      </div>
    </form>
  );
}

export default Registration;
