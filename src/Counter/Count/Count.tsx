import React from 'react';
import s from './Count.module.css'

type CountType = {
	value: number
	max: number
	isIncrement: boolean
	// error: boolean
}

const Count = ({value, isIncrement, max}: CountType) => {

	const maxValue = value === max && max !== 0 ? s.red : s.count
	const titleOrNumber = isIncrement ? <h2 className={s.text}>Enter value and press "set"</h2> : value

	return (
		<div className={maxValue}>{titleOrNumber}</div>
	);
};

export default Count;