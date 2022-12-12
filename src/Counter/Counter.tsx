import React from 'react';
import Count from "./Count/Count";
import Button from "./Button/Button";
import s from './Counter.module.css'

type CounterType = {
	value: number
	incrementHandler: () => void
	resetHandler: () => void
	max: number
	isIncrement: boolean
	error: string | null
}

const Counter = ({value,error, isIncrement, max, incrementHandler, resetHandler}: CounterType) => {
	return (
		<div className={s.counter}>
			<Count value={value} isIncrement={isIncrement} error={error} max={max}/>

			<div className={s.wrapper}>
				<Button title={"incr"} callback={incrementHandler} disabled={value === max || isIncrement}/>
				<Button title={"reset"} callback={resetHandler} disabled={value < max || value === 0 || isIncrement}/>
			</div>

		</div>
	);
};

export default Counter;