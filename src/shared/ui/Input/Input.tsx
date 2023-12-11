import {ChangeEvent, InputHTMLAttributes, memo, useEffect, useRef, useState} from 'react'
import {classNames, Mods} from 'shared/lib/classNames/classNames'
import cls from './Input.module.scss'

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange' | 'readOnly'>

interface InputProps extends HTMLInputProps {
	className?: string
	value?: string | number
	onChange?: (value: any) => void
	autofocus?: boolean
	readOnly?: boolean
}

export const Input = memo((props: InputProps) => {
	const {value, onChange, type = 'text', placeholder, autofocus, readOnly, ...otherProps} = props

	const ref = useRef<HTMLInputElement>(null)
	const [isFocused, setIsFocused] = useState(false)
	const [caretPosition, setCaretPosition] = useState(0)
	// const [error, setError] = useState<string | null>(null)
	const isCaretVisible = isFocused && !readOnly

	useEffect(() => {
		if (autofocus) {
			setIsFocused(true)
			ref.current?.focus()
		}
	}, [autofocus])

	const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
		onChange?.(event.target.value)
		setCaretPosition(event.target.selectionStart ?? 0)
	}

	const onBlur = () => {
		setIsFocused(false)
	}
	const onFocus = () => {
		setIsFocused(true)
	}
	const onSelect = (event: ChangeEvent<HTMLInputElement>) => {
		setCaretPosition(event.target.selectionStart ?? 0)
	}

	const mods: Mods = {
		[cls.readOnly]: readOnly
	}
	return (
		<div className={classNames(cls.InputWrapper, mods)}>
			{placeholder && <div className={cls.placeholder}>{`${placeholder}>`}</div>}
			<div className={classNames('', {[cls.caretWrapper]: !readOnly})}>
				{/*<div className={cls.caretWrapper}>*/}
				<input
					ref={ref}
					type={type}
					value={value}
					onChange={onChangeHandler}
					className={cls.input}
					onBlur={onBlur}
					onFocus={onFocus}
					onSelect={onSelect}
					readOnly={readOnly}
					{...otherProps}
				/>
				{isCaretVisible && (
					<span
						className={cls.caret}
						style={{left: `${caretPosition * 8.8}px`}}
					>
						&nbsp;
					</span>
				)}
			</div>
		</div>
	)
})
