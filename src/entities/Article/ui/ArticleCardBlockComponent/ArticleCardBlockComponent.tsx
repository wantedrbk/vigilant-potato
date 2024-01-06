import {classNames} from 'shared/lib/classNames/classNames'
import cls from './ArticleCardBlockComponent.module.scss'
import {ArticleBlockCard} from 'entities/Article/model/types/article'
import {Avatar} from 'shared/ui/Avatar/Avatar'
import {Input} from 'shared/ui/Input/Input'
import {Button, ButtonSize} from 'shared/ui/Button/Button'

interface ArticleCardBlockComponentProps {
	className?: string
	block: ArticleBlockCard
}

export const ArticleCardBlockComponent = (props: ArticleCardBlockComponentProps) => {
	const {className, block} = props

	return (
		<div className={classNames(cls.ArticleCardBlockComponent, {}, [className])}>
			<hr className={cls.rowDevider} />
			<div className={cls.username}>@{block.username}</div>
			<div>{block.fullname}</div>
			<hr className={cls.rowDevider} />
			<div className={cls.title}>Recieve articles from @{block.username}</div>
			<div className={cls.authorEmailForm}>
				<Input
					size={15}
					className={cls.inputBtn}
					placeholderIn={'Enter your email'}
				/>
				<Button
					size={ButtonSize.M}
					className={cls.submitBtn}
				>
					Subscribe
				</Button>
			</div>
		</div>
	)
}
