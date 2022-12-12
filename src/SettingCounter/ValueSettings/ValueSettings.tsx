import React, {ChangeEvent} from 'react';
import s from "./ValueSettings.module.css"

type ValueSettingsType = {
	max: number
	startValue: number
	onChangeMax: (e: ChangeEvent<HTMLInputElement>) => void
	onChangeStart: (e: ChangeEvent<HTMLInputElement>) => void
	isIncrement: boolean
}


const ValueSettings = ({startValue, isIncrement, max, onChangeMax, onChangeStart}: ValueSettingsType) => {

	const classInputError = max === startValue
		&& max !== 0
		&& startValue !== 0
		|| max < 0
		|| startValue < 0
		|| max < startValue

	return (
		<div className={s.valueSettings}>
			<div className={s.text}>max value:
				<input className={classInputError ? s.error : s.input} type="number" value={max} onChange={onChangeMax}/>
			</div>
			<div className={s.text}>start value:
				<input className={classInputError ? s.error : s.input} type="number" value={startValue}
							 onChange={onChangeStart}/>
			</div>
		</div>
	);
};

export default ValueSettings;