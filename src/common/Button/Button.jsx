import React from 'react';
import './button.scss';

function Button(props) {
	return <button  {...props} className='button'>{props.name}</button>;
}

export default Button;