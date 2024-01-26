import {classNames} from 'shared/lib/classNames/classNames'
import cls from './ArticleDetails.module.scss'


interface MyTestComponentProps {
	className?: string
}


export const MyTestComponent = ({className}: MyTestComponentProps) => {
	return (
		<div className={classNames(cls.MyTestComponent, {}, [className])}></div>
	)
}