import {LoginModal} from 'features/AuthByUsername'
import {memo, useCallback, useState} from 'react'
import {useTranslation} from 'react-i18next'
import {classNames} from 'shared/lib/classNames/classNames'
import {Button, ThemeButton} from 'shared/ui/Button/Button'
import cls from './Navbar.module.scss'
import {getUserAuthData} from 'entities/User/model/selectors/getUserAuthData/getUserAuthData'
import {useDispatch, useSelector} from 'react-redux'
import {userActions} from 'entities/User'
import {AppLink} from 'shared/ui/AppLink/AppLink'
import {RoutePath} from 'shared/config/routeConfig/routeConfig'
import logo from 'shared/assets/icons/logo.svg'
import {Icon} from 'shared/ui/Icon/Icon'
import {Text, TextTheme} from 'shared/ui/Text/Text'

interface NavBarProps {
	className?: string
}

export const NavBar = memo(({className}: NavBarProps) => {
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
			<header className={classNames(cls.navbar, {}, [className])}>
				<AppLink to={RoutePath.articles}>
					<Icon Svg={logo} className={cls.logo}/>
				</AppLink>
				<AppLink
					to={RoutePath.article_create}
					className={cls.createLink}
				>
					<Text title={t('Создать статью')} theme={TextTheme.INVERTED}/>
				</AppLink>
				<Button
					theme={ThemeButton.CLEARINVERTED}
					className={cls.links}
					onClick={onLogOut}
				>
					{t('Sign out')}
				</Button>
			</header>
		)
	}
	return (
		<header className={classNames(cls.navbar, {}, [className])}>
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
		</header>
	)
})
