import React from 'react';
import s from './Button.module.css'

type ButtonType = {
	callback: () => void
	disabled: boolean
	title: string
}

const Button = ({callback, disabled, title}: ButtonType) => {
	return (
		<div>
			<button className={ disabled? s.opacity : s.button } disabled={disabled} onClick={callback} >{title}</button>
		</div>
	);
};

export default Button;