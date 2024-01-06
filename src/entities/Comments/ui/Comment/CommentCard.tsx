import {classNames} from 'shared/lib/classNames/classNames'
import cls from './CommentCard.module.scss'
import {Text, TextAlign, TextSize, TextTheme} from 'shared/ui/Text/Text'
import {CommentCardType} from 'entities/Comments'
import {Avatar} from 'shared/ui/Avatar/Avatar'
import {Skeleton} from 'shared/ui/Skeleton/Skeleton'
import {AppLink} from 'shared/ui/AppLink/AppLink'
import {RoutePath} from 'shared/config/routeConfig/routeConfig'

interface CommentCardProps {
	className?: string
	comment?: CommentCardType
	isLoading?: boolean
	error?: string | null
}

export const CommentCard = ({className, comment, isLoading, error}: CommentCardProps) => {
	let content
	if (isLoading) {
		content = (
			<>
				<div className={cls.header}>
					<Skeleton
						width={30}
						height={30}
						border={'50%'}
					/>
					<Skeleton
						className={cls.username}
						width={'100%'}
						height={32}
					/>
				</div>
				<Skeleton
					className={cls.text}
					width={'100%'}
					height={32}
				/>
			</>
		)
	} else if (error) {
		content = (
			<Text
				title={'Comments is not found'}
				theme={TextTheme.PRIMARY}
				align={TextAlign.CENTER}
			/>
		)
	} else {
		content = (
			<>
				<AppLink to={`${RoutePath.profile}${comment?.user.id}`} className={cls.header}>
					{comment?.user.avatar ? (
						<Avatar
							minSize={30}
							maxSize={30}
							src={comment?.user.avatar}
						/>
					) : null}

					<Text
						className={cls.username}
						title={comment?.user.username}
					/>
				</AppLink>
				<Text
					className={cls.text}
					size={TextSize.L}
					text={comment?.text}
				/>
			</>
		)
	}

	return <div className={classNames(cls.CommentCard, {}, [className])}>{content}</div>
}
