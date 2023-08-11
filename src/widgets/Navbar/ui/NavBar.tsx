import {LoginModal} from 'features/AuthByUsername'
import {useCallback, useState} from 'react'
import {useTranslation} from 'react-i18next'
import {classNames} from 'shared/lib/classNames/classNames'
import {Button, ThemeButton} from 'shared/ui/Button/Button'
import cls from './Navbar.module.scss'
import {getUserAuthData} from 'entities/User/model/selectors/getUserAuthData/getUserAuthData'
import {useDispatch, useSelector} from 'react-redux'
import {userActions} from 'entities/User'

interface NavBarProps {
	className?: string
}

export const NavBar = ({className}: NavBarProps) => {
	const {t} = useTranslation()
	const [isAuthModal, setIsAuthModal] = useState(false)
	const authData = useSelector(getUserAuthData)
	const dispatch = useDispatch()

	const onCloseModal = useCallback(() => {
		setIsAuthModal(false)
	}, [])

	const onShowModal = useCallback(() => {
		setIsAuthModal(true)
	}, [])

	const onLogOut = useCallback(() => {
		dispatch(userActions.logout())
		setIsAuthModal(false)
	}, [dispatch])

	if (authData) {
		return (
			<div className={classNames(cls.navbar, {}, [className])}>
				<Button
					theme={ThemeButton.CLEARINVERTED}
					className={cls.links}
					onClick={onLogOut}
				>
					{t('Sign out')}
				</Button>
			</div>
		)
	}
	return (
		<div className={classNames(cls.navbar, {}, [className])}>
			<Button
				theme={ThemeButton.CLEARINVERTED}
				className={cls.links}
				onClick={onShowModal}
			>
				{t('Sign in')}
			</Button>
			{isAuthModal && (
				<LoginModal
					isOpen={isAuthModal}
					onClose={onCloseModal}
				/>
			)}
		</div>
	)
}
