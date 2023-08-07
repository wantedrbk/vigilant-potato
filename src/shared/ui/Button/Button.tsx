import React from 'react'
import {classNames} from 'shared/lib/classNames/classNames'
import cls from './Button.module.scss'
import {ButtonHTMLAttributes, FC} from 'react'

export enum ThemeButton {
	CLEAR = 'clear',
	CLEARINVERTED = 'clearInverted',
	OUTLINE = 'outline',
	BACKGROUND_INVERTED = 'backgroundInverted',
	BACKGROUND = 'background'
}

export enum ButtonSize {
	M = 'size_m',
	L = 'size_l',
	XL = 'size_xl'
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	className?: string
	theme?: ThemeButton
	square?: boolean
	size?: ButtonSize
	disabled?: boolean
}

export const Button: FC<ButtonProps> = (props) => {
	const {className, children, theme, square, size, disabled, ...otherProps} =
		props

	const mods: Record<string, boolean> = {
		[cls[theme]]: true,
		[cls[size]]: true,
		[cls.square]: square,
		[cls.disabled]: disabled
	}
	return (
		<button
			className={classNames(cls.Button, mods, [className])}
			disabled={disabled}
			{...otherProps}
		>
			{children}
		</button>
	)
}
