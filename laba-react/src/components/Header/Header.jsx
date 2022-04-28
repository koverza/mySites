import React from 'react';
import '../../App.scss';
import './header.scss';
import Logo from './components/Logo/Logo';
import Button from './components/Button/Button';

function Header() {
	return (
		<header className='header'>
			<div className='header-logo'>
				<Logo />
			</div>
			<div className='header-registr'>
				<span className='header-name'>Dave</span>
				<Button />
			</div>
		</header>
	);
}

export default Header;
