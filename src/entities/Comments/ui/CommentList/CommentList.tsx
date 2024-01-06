import {classNames} from 'shared/lib/classNames/classNames'
import cls from './CommentList.module.scss'
import {CommentCard} from '../Comment/CommentCard'
import {CommentCardType} from 'entities/Comments'
import {Text} from 'shared/ui/Text/Text'

interface CommentListProps {
	className?: string
	comments?: CommentCardType[]
	isLoading?: boolean
	error?: string | null
}

export const CommentList = ({className, isLoading, comments, error}: CommentListProps) => {
	
	if(isLoading) {
		return (<div className={classNames(cls.CommentList, {}, [className])}>
			<CommentCard isLoading />
			<CommentCard isLoading />
			<CommentCard isLoading />
		</div>)
	}
	return (
		<div className={classNames(cls.CommentList, {}, [className])}>
			{comments?.length ? (
				comments?.map((comment) => (
					<CommentCard
						key={comment.id}
						comment={comment}
						isLoading={isLoading}
						error={error}
					/>
				))
			) : (
				<Text text={'Comments is not found'} />
			)}
		</div>
	)
}
