import React, {memo} from 'react'
import {classNames, Mods} from 'shared/lib/classNames/classNames'
import cls from './Button.module.scss'
import {ButtonHTMLAttributes} from 'react'

export enum ThemeButton {
	CLEAR = 'clear',
	CLEARINVERTED = 'clearInverted',
	OUTLINE = 'outline',
	OUTLINE_RED = 'outline_red',
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

export const Button = memo((props: ButtonProps) => {
	const {
		className,
		children,
		theme = ThemeButton.BACKGROUND,
		square,
		size = ButtonSize.M,
		disabled,
		...otherProps
	} = props

	const mods: Mods = {
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
})
