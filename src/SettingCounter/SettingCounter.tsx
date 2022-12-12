import React, {ChangeEvent, useState} from 'react';
import s from "./Setting.module.css"
import ValueSettings from "./ValueSettings/ValueSettings";
import Button from "./Button/Button";

type SettingCounterType = {
	max: number
	start: number
	onChangeMax: (e: ChangeEvent<HTMLInputElement>) => void
	onChangeStart: (e: ChangeEvent<HTMLInputElement>) => void
	handleClick: () => void
	isIncrement: boolean
	error: string | null
}

const SettingCounter = ({handleClick, error ,isIncrement, max, start, onChangeMax, onChangeStart}: SettingCounterType) => {

	return (
		<div className={s.settingCounter}>
			<ValueSettings
				max={max}
				startValue={start}
				onChangeMax={onChangeMax}
				onChangeStart={onChangeStart}
				isIncrement={isIncrement}
			/>
			<Button callback={handleClick} disabled={!!error} error={error} isIncrement={isIncrement}/>
		</div>
	);
};

export default SettingCounter;