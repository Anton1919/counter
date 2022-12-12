import React from 'react';
import s from "./Button.module.css"

type ButtonType = {
	callback: () => void
	isIncrement: boolean
	error: string | null
	disabled: boolean
}

const Button = ({callback, error, disabled, isIncrement}: ButtonType) => {
	return (
		<div className={s.wrapper}>
			<button className={disabled || !isIncrement ? s.opacity : s.button} disabled={disabled} onClick={callback}>set
			</button>
		</div>
	);
};

export default Button;