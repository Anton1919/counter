import React from 'react';
import s from './Count.module.css'

type CountType = {
	value: number
	max: number
	isIncrement: boolean
	error: string | null
}

const Count = ({value, error, isIncrement, max}: CountType) => {

	const maxValue = value === max && max !== 0 ? s.red : s.count
	const titleOrNumber = error
		? <h2 className={s.error}>{error}</h2>
		: isIncrement
			? <h2 className={s.text}>Enter value and press "set"</h2>
			: value

	return (
		<div className={maxValue}>{titleOrNumber}</div>
	);
};

export default Count;