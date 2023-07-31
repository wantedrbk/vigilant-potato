import {LoginModal} from 'features/AuthByUsername'
import {useCallback, useState} from 'react'
import {useTranslation} from 'react-i18next'
import {classNames} from 'shared/lib/classNames/classNames'
import {Button, ThemeButton} from 'shared/ui/Button/Button'
import cls from './Navbar.module.scss'

interface NavBarProps {
	className?: string
}

export const NavBar = ({className}: NavBarProps) => {
	const {t} = useTranslation(['translation'])
	const [isAuthModal, setIsAuthModal] = useState(false)

	const onCloseModal = useCallback(() => {
		setIsAuthModal(false)
	}, [])

	const onShowModal = useCallback(() => {
		setIsAuthModal(true)
	}, [])

	return (
		<div className={classNames(cls.navbar, {}, [className])}>
			<Button
				theme={ThemeButton.CLEARINVERTED}
				className={cls.links}
				onClick={onShowModal}
			>
				{t('Sign in')}
			</Button>
			<LoginModal
				isOpen={isAuthModal}
				onClose={onCloseModal}
			/>
		</div>
	)
}
