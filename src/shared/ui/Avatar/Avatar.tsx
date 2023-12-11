import {classNames, Mods} from 'shared/lib/classNames/classNames'
import cls from './Avatar.module.scss'
import {CSSProperties, useMemo} from 'react'

interface AvatarProps {
	className?: string
	src?: string
	size?: number
	alt?: string
}

export const Avatar = (props: AvatarProps) => {
	const {className, size, alt = 'Avatar', src} = props
	const mods: Mods = {}
	console.log(src)
	const styles = useMemo<CSSProperties>(
		() => ({
			width: size || 100,
			height: size || 100
		}),
		[size]
	)

	return (
		<img
			src={src}
			alt={alt}
			style={styles}
			className={classNames(cls.Avatar, mods, [className])}
		/>
	)
}
