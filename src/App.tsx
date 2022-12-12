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


	const conditionErrorMessage = max === start && max !== 0 && start !== 0 || max < 0 || start < 0 || max < start


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
		if (+e.currentTarget.value <= start || +e.currentTarget.value < 0) {
			setError('Incorrect message!')
		} else {
			setError(null)
		}

	}

	const onChangeStart = (e: ChangeEvent<HTMLInputElement>) => {
		setStart(Number(e.currentTarget.value))
		setIsIncrement(true)
		if (+e.currentTarget.value >= max || +e.currentTarget.value < 0) {
			setError('Incorrect message!')
		} else {
			setError(null)
		}
	}

	return (
		<div className="App">
			<Counter
				error={error}
				isIncrement={isIncrement}
				max={max}
				value={value}
				incrementHandler={incrementHandler}
				resetHandler={resetHandler}
			/>

			<SettingCounter
				error={error}
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
