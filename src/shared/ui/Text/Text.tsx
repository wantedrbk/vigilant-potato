import {classNames, Mods} from 'shared/lib/classNames/classNames'
import cls from './Text.module.scss'

export enum TextTheme {
	PRIMARY = 'primary',
	ERROR = 'error'
}

export enum TextAlign {
	LEFT = 'left',
	CENTER = 'center',
	RIGHT = 'right'
}

export enum TextSize {
	S = 's',
	M = 'm',
	L = 'l',
	XL = 'xl'
}

interface TextProps {
	className?: string
	title?: string
	text?: string
	theme?: TextTheme
	align?: TextAlign
	size?: TextSize
}

export const Text = (props: TextProps) => {
	const {
		className,
		title,
		text,
		align = TextAlign.LEFT,
		theme = TextTheme.PRIMARY,
		size = TextSize.M
	} = props

	const mods: Mods = {
		[cls[theme]]: true,
		[cls[align]]: true,
		[cls[size]]: true
	}
	return (
		<div className={classNames(cls.Text, mods, [className])}>
			{title && <p className={cls.title}>{title}</p>}
			{text && <p className={cls.text}>{text}</p>}
		</div>
	)
}
