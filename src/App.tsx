import React, {ChangeEvent, useEffect, useState} from 'react';
import './App.css';
import Counter from "./Counter/Counter";
import SettingCounter from "./SettingCounter/SettingCounter";

function App() {

	const [value, setValue] = useState(0)
	const [max, setMax] = useState(0)
	const [start, setStart] = useState(0)
	const [isIncrement, setIsIncrement] = useState<boolean>(false)
	const [error, setError] = useState<string | null>(null)

	// const classError = () => {
	// 	const error = max === start && max !== 0 && start !== 0 || max < 0 || start < 0 || max < start
	// 	if (error)
	// 		setError(true)
	// }


	//Below useEffect for the MAXIMUM value:
	// useEffect(() => {
	// 	localStorage.setItem("maxValue", JSON.stringify(max))
	// }, [max])

	useEffect(() => {
		let maxValueAsString = localStorage.getItem("maxValue")
		let startValueAsString = localStorage.getItem("startValue")
		if (startValueAsString) {
			let newValue = JSON.parse(startValueAsString)
			setStart(newValue)
			setValue(newValue)
		}
		if (maxValueAsString) {
			let newValue = JSON.parse(maxValueAsString)
			setMax(newValue)
		}
	}, [])

	//Below useEffect for the START value:
	// useEffect(() => {
	// 	localStorage.setItem("startValue", JSON.stringify(start))
	// }, [start])

	// useEffect(() => {
	// 	let getValue = localStorage.getItem("startValue")
	// 	if (getValue) {
	// 		let newValue = JSON.parse(getValue)
	// 		setStart(newValue)
	// 	}
	// }, [])

	// Below buttons logic:

	const handleClick = () => {
		setValue(start)
		setMax(max)
		setIsIncrement(false)
		localStorage.setItem("startValue", JSON.stringify(start))
		localStorage.setItem("maxValue", JSON.stringify(max))
	}

	const incrementHandler = () => {
		setValue(value + 1)
	}

	const resetHandler = () => {
		setValue(start)
	}
	/////////////////////////////////////////

	const onChangeMax = (e: ChangeEvent<HTMLInputElement>) => {
		setMax(Number(e.currentTarget.value))
		setIsIncrement(true)
		if (+e.currentTarget.value < 0) {
			setError('Значение не должно быть меньше 0')
		}
	}

	const onChangeStart = (e: ChangeEvent<HTMLInputElement>) => {
		setStart(Number(e.currentTarget.value))
		setIsIncrement(true)
	}

	return (
		<div className="App">
			<Counter
				// error={error}
				isIncrement={isIncrement}
				max={max}
				value={value}
				incrementHandler={incrementHandler}
				resetHandler={resetHandler}
			/>

			<SettingCounter
				// error={error}
				max={max}
				start={start}
				onChangeMax={onChangeMax}
				onChangeStart={onChangeStart}
				handleClick={handleClick}
				isIncrement={isIncrement}
			/>
		</div>
	);
}

export default App;
