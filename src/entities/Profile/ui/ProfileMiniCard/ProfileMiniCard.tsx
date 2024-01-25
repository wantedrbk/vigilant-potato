import {classNames} from 'shared/lib/classNames/classNames'
import cls from './ProfileMiniCard.module.scss'
import {Card} from 'shared/ui/Card/Card'
import {Avatar} from 'shared/ui/Avatar/Avatar'
import {Text, TextSize} from 'shared/ui/Text/Text'
import {getUserAuthData} from 'entities/User'
import { useSelector } from 'react-redux'
import {MiniProfile} from 'entities/Profile'
import {Skeleton} from 'shared/ui/Skeleton/Skeleton'
import {Input} from 'shared/ui/Input/Input'
import {Button, ButtonSize} from 'shared/ui/Button/Button'

interface ProfileMiniCardProps {
	className?: string;
	profile?: MiniProfile;
	error?: string | null
	loading?: boolean
}


export const ProfileMiniCard = ({className, profile, loading, error}: ProfileMiniCardProps) => {
 	// const dispatch = useAppDispatch()
	let content
	
	if (loading) {
		content =  (
				<Card className={classNames(cls.ProfileMiniCard, {}, [className])}>
					<Skeleton height={100} />
					<hr className={cls.rowDevider} />
					<Skeleton height={20} />
					<Skeleton height={20} />
					<hr className={cls.rowDevider} />
				</Card>
		)
	} else if (error) {
		content =  (
				<Card className={classNames(cls.ProfileMiniCard, {}, [className])}>
					<Text text={error} />
				</Card>
		)
	} else {
		content = (
			<Card className={classNames(cls.ProfileMiniCard, {}, [className])}>
				<Avatar src={profile?.avatar} />
				<hr className={cls.rowDevider} />
				<Text title={`@${profile?.username}`} size={TextSize.M} className={cls.title} />
				<Text text={`${profile?.firstname} ${profile?.lastname}`} />
				<hr className={cls.rowDevider} />
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
			</Card>
		)
	}
	
	return (
		<div className={classNames(cls.ArticleDetails, {}, [className])}>{content}</div>
	)
}

