import React, {useCallback} from 'react'
import cls from './ProfilePageHeader.module.scss'
import {Text} from 'shared/ui/Text/Text'
import {Button, ButtonSize, ThemeButton} from 'shared/ui/Button/Button'
import {useTranslation} from 'react-i18next'
import {classNames} from 'shared/lib/classNames/classNames'
import {useSelector} from 'react-redux'
import {getProfileReadOnly, profileActions, updateProfileData} from 'entities/Profile'
import {useAppDispatch} from 'shared/lib/hooks/useAppDispatch'

interface ProfilePageHeaderProps {
	className?: string
}
const ProfilePageHeader = (props: ProfilePageHeaderProps) => {
	const {className} = props
	const {t} = useTranslation('profile')
	const readOnly = useSelector(getProfileReadOnly)
	const dispatch = useAppDispatch()

	const onEdit = useCallback(() => {
		dispatch(profileActions.setReadOnly(false))
	}, [dispatch])

	const onCancel = useCallback(() => {
		dispatch(profileActions.cancelEdit())
	}, [dispatch])

	const onSubmit = useCallback(() => {
		dispatch(updateProfileData())
		// dispatch(profileActions.setReadOnly(true))
	}, [dispatch])

	return (
		<div className={classNames(cls.ProfilePageHeader, {}, [className])}>
			<Text title={t('Profile')} />
			{readOnly ? (
				<Button
					className={cls.editBtn}
					theme={ThemeButton.OUTLINE}
					onClick={onEdit}
				>
					{t('Edit')}
				</Button>
			) : (
				<div className={cls.combinedBtn}>
					<Button
						className={cls.saveBtn}
						theme={ThemeButton.OUTLINE}
						onClick={onSubmit}
						size={ButtonSize.M}
					>
						{t('Save')}
					</Button>
					<Button
						className={cls.cancelBtn}
						theme={ThemeButton.OUTLINE_RED}
						onClick={onCancel}
						size={ButtonSize.M}
					>
						{t('Cancel')}
					</Button>
				</div>
			)}
		</div>
	)
}

export default ProfilePageHeader
