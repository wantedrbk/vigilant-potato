import {classNames} from 'shared/lib/classNames/classNames'
import cls from './ArticleCodeBlockComponent.module.scss'
import {ArticleBlockCode} from '../../model/types/article'
import {Code} from 'shared/ui/Code/Code'

interface ArticleCodeBlockComponentProps {
	className?: string
	block: ArticleBlockCode
}

export const ArticleCodeBlockComponent = ({className, block}: ArticleCodeBlockComponentProps) => {
	return (
		<div className={classNames(cls.ArticleCodeBlockComponent, {}, [className])}>
			<Code text={block.content} />
		</div>
	)
}
