import React from 'react';
import '../../App.scss';
import './header.scss';
import Logo from './components/Logo/Logo';
// import Button from './components/Button/Button';
import { NavLink} from 'react-router-dom';

function Header() {
	return (
		<header className='header'>
			<div className='header-logo'>
				<Logo />
			</div>
			<div className='header-registr'>
				{/* <span className='header-name'>Oleksandr</span> */}
				{/* <Button name={'Login'} />
				<Button name={'Logout'} /> */}
				<NavLink to="/login" className="header-button button">Login</NavLink>
				<NavLink to="/logout" className="header-button button">Logout</NavLink>
			</div>

		</header>
	);
}

export default Header;
