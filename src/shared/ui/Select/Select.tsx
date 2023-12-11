import {classNames, Mods} from 'shared/lib/classNames/classNames'
import cls from './Select.module.scss'
import {ChangeEvent, memo, useMemo} from 'react'

interface SelectOption {
	value: string
	content: string
}

interface SelectProps {
	className?: string
	label?: string
	options?: SelectOption[]
	value?: string
	onChange?: (value: string) => void
	disabled?: boolean
}

export const Select = memo((props: SelectProps) => {
	const {className, label, options, value, disabled, onChange} = props

	const onChangeHandler = (event: ChangeEvent<HTMLSelectElement>) => {
		if (onChange) {
			onChange?.(event.target.value)
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
})
