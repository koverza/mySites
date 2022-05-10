import React from 'react';
import '../../../../App.scss';
import '../../header.scss';

function Button(props) {
	return <button className='header-button button'>{props.name}</button>;
}

export default Button;
