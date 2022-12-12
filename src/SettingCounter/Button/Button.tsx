import React from 'react';
import s from "./Button.module.css"

type ButtonType = {
	callback: () => void
	isIncrement: boolean
}

const Button = ({callback, isIncrement}: ButtonType) => {
	return (
		<div className={s.wrapper}>
			<button className={isIncrement ? s.button : s.opacity } onClick={callback}>set</button>
		</div>
	);
};

export default Button;