import React from 'react';
import './login.scss'
import { NavLink} from 'react-router-dom';


function Login(props) {
    return (
    <div className="login">
        <div className="login-box">
            <h2 className="login-title">{props.name}</h2>
            <div className="login-block">
                <span className="login-block__title title">Email</span>
                <input type="email" className="login-block__input input" placeholder="Enter email"/>
            </div>
            <div className="login-block">
                <span className="login-block__title title">Password</span>
                <input type="password" className="login-block__input input" placeholder="Enter password"/>
            </div>
            <button className="registration-button button">{props.name}</button>
            <span>If you have an account you can <NavLink to="/logout" className="registration-link">Logout</NavLink></span>
        </div>
    </div>
    )				

}

export default Login;