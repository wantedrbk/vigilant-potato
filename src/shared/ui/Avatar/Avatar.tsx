import {classNames, Mods} from 'shared/lib/classNames/classNames'
import cls from './Avatar.module.scss'
import {CSSProperties, useMemo} from 'react'

interface AvatarProps {
	className?: string
	src?: string
	size?: number
	alt?: string
	minSize?:number
	maxSize?:number
}

export const Avatar = (props: AvatarProps) => {
	const {className, size, alt = 'Avatar', src, minSize, maxSize} = props
	const mods: Mods = {}
	console.log(src)
	const styles = useMemo<CSSProperties>(
		() => ({
			minWidth: minSize || 100,
			maxWidth: maxSize || 200,
			width: size,
			height: 'auto' || 100
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
