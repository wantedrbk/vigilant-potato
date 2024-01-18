import {classNames, Mods} from 'shared/lib/classNames/classNames'
import cls from './Select.module.scss'
import {ChangeEvent, memo, useMemo} from 'react'

export interface SelectOption<T extends string> {
	value: T
	content: T
}

interface SelectProps<T extends string> {
	className?: string
	label?: string
	options?: SelectOption<T>[]
	value?: T
	onChange?: (value: T) => void
	disabled?: boolean
}

export const Select = <T extends string>(props: SelectProps<T>) => {
	const {className, label, options, value, disabled, onChange} = props

	const onChangeHandler = (event: ChangeEvent<HTMLSelectElement>) => {
		if (onChange) {
			onChange?.(event.target.value as T)
		}
	}

	const optionList = useMemo(() => {
		return options?.map((opt) => {
			return (
				<option
					key={opt.value}
					value={opt.value}
				>
					{opt.content}
				</option>
			)
		})
	}, [options])

	const mods: Mods = {
		[cls.readOnly]: disabled
	}

	return (
		<div className={classNames(cls.Wrapper, mods, [className])}>
			{label && <span className={cls.label}>{label + '>'}</span>}
			<select
				className={cls.select}
				name=''
				id=''
				value={value}
				onChange={onChangeHandler}
				disabled={disabled}
			>
				{optionList}
			</select>
		</div>
	)
}
