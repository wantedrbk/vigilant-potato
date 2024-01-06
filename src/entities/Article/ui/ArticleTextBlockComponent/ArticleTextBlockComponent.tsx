import {classNames} from 'shared/lib/classNames/classNames'
import cls from './ArticleTextBlockComponent.module.scss'
import {ArticleBlockText} from '../../model/types/article'
import {Text} from 'shared/ui/Text/Text'
import {memo} from 'react'

interface ArticleTextBlockComponentProps {
	className?: string
	block: ArticleBlockText
}

export const ArticleTextBlockComponent = memo((props: ArticleTextBlockComponentProps) => {
	const {className, block} = props

	return (
		<div className={classNames(cls.ArticleTextBlockComponent, {}, [className])}>
			{block?.title && (
				<Text
					title={block?.title}
					className={cls.title}
				/>
			)}
			{block.paragraphs?.map((paragraph) => (
				<Text
					key={paragraph}
					text={paragraph}
					className={cls.paragraph}
				/>
			))}
		</div>
	)
})
