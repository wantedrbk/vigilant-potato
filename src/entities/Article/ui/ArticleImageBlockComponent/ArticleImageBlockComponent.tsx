import {classNames} from 'shared/lib/classNames/classNames'
import cls from './ArticleImageBlockComponent.module.scss'
import {ArticleBlockImage} from 'entities/Article/model/types/article'
import {Text, TextAlign} from 'shared/ui/Text/Text'

interface ArticleImageBlockComponentProps {
	className?: string
	block: ArticleBlockImage
}

export const ArticleImageBlockComponent = ({className, block}: ArticleImageBlockComponentProps) => {
	return (
		<div className={classNames(cls.ArticleImageBlockComponent, {}, [className])}>
			<img
				src={block.link}
				className={cls.image}
				alt={block.title}
			/>
			{block.title && (
				<Text
					title={block.title}
					align={TextAlign.CENTER}
				/>
			)}
		</div>
	)
}
