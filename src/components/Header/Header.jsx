import React from 'react';
import Logo from './components/Logo/Logo';
import { NavLink} from 'react-router-dom';
import './header.scss';
import '../../App.scss';

function Header() {
	return (
		<header className='header'>
			<div className='header-logo'>
				<Logo />
			</div>
			<div className='header-registration'>
				<NavLink to="/login" className="button">Login</NavLink>
				<NavLink to="/registration" className="button">Registration</NavLink>
			</div>

		</header>
	);
}

export default Header;
