import {InputHTMLAttributes, memo, useEffect, useRef, useState} from 'react'
import {classNames} from 'shared/lib/classNames/classNames'
import cls from './Input.module.scss'

type HTMLInputProps = Omit<
	InputHTMLAttributes<HTMLInputElement>,
	'value' | 'onChange'
>

interface InputProps extends HTMLInputProps {
	className?: string
	value?: string
	onChange?: (value: string) => void
	autofocus?: boolean
}

export const Input = memo((props: InputProps) => {
	const {
		className,
		value,
		onChange,
		type = 'text',
		placeholder,
		autofocus,
		...otherProps
	} = props

	const ref = useRef<HTMLInputElement>(null)
	const [isFocus, setIsFocus] = useState(false)
	const [caretPosition, setCaretPosition] = useState(0)

	useEffect(() => {
		if (autofocus) {
			setIsFocus(true)
			ref.current?.focus()
		}
	}, [autofocus])

	const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
		onChange?.(event.target.value)
		setCaretPosition(event.target.selectionStart ?? 0)
	}

	const onBlur = () => {
		setIsFocus(false)
	}
	const onFocus = () => {
		setIsFocus(true)
	}
	const onSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
		setCaretPosition(event.target.selectionStart ?? 0)
	}

	return (
		<div className={classNames(cls.InputWrapper, {}, [className])}>
			{placeholder && (
				<div className={cls.placeholder}>{`${placeholder}>`}</div>
			)}
			<div className={cls.caretWrapper}>
				<input
					ref={ref}
					type={type}
					value={value}
					onChange={onChangeHandler}
					className={cls.input}
					onBlur={onBlur}
					onFocus={onFocus}
					onSelect={onSelect}
					{...otherProps}
				/>
				{isFocus && (
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
