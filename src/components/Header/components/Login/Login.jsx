import React from "react";
import { NavLink } from "react-router-dom";
import Button from "../../../../common/Button/Button";
import Input from "../../../../common/Input/Input";
import "./login.scss";

function Login() {

  // function login(e) {
  //   e.preventDefault()
  //   console.log('click')
  // }

  return (
    <form className="login">
      <div className="login-box">
        <h2 className="login-title">Login</h2>
        <div className="login-block">
          <span className="login-block__title title">Email</span>
          <Input type="email" placeholder="Enter email" />
        </div>
        <div className="login-block">
          <span className="login-block__title title">Password</span>
          <Input type="password" placeholder="Enter password" />
        </div>
        <Button name={"Login"}/>
        <span>
          If you have an account you can{" "}
          <NavLink to="/registration" className="registration-link">
            Registration
          </NavLink>
        </span>
      </div>
    </form>
  );
}

export default Login;
