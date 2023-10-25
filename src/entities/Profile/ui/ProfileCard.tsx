import {classNames} from 'shared/lib/classNames/classNames'
import cls from './ProfileCard.module.scss'
import {useSelector} from 'react-redux'
import {getProfileData} from 'entities/Profile/model/selectors/getProfileData/getProfileData'
import {getProfileLoading} from 'entities/Profile/model/selectors/getProfileLoading/getProfileLoading'
import {getProfileError} from 'entities/Profile/model/selectors/getProfileError/getProfileError'
import {Text} from 'shared/ui/Text/Text'
import {useTranslation} from 'react-i18next'
import {Button, ThemeButton} from 'shared/ui/Button/Button'
import {Input} from 'shared/ui/Input/Input'

interface ProfileCardProps {
	className?: string
}

export const ProfileCard = ({className}: ProfileCardProps) => {
	const {t} = useTranslation('profile')
	const data = useSelector(getProfileData)
	const loading = useSelector(getProfileLoading)
	const error = useSelector(getProfileError)

	return (
		<div className={classNames(cls.ProfileCard, {}, [className])}>
			<div className={cls.header}>
				<Text title={t('Profile')} />
				<Button
					className={cls.editBtn}
					theme={ThemeButton.OUTLINE}
				>
					{t('Edit')}
				</Button>
			</div>
			<div className={cls.data}>
				<Input
					value={data?.firstname}
					placeholder={t('Your Name')}
					className={cls.input}
				/>

				<Input
					value={data?.lastname}
					placeholder={t('Your Surname')}
					className={cls.input}
				/>
			</div>
		</div>
	)
}
