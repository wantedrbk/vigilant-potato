import {useTranslation} from 'react-i18next'
import {classNames} from 'shared/lib/classNames/classNames'
import {Button, ThemeButton} from 'shared/ui/Button/Button'
import {Input} from 'shared/ui/Input/Input'
import cls from './LoginForm.module.scss'
import {useDispatch, useSelector} from 'react-redux'
import {memo, useCallback} from 'react'
import {loginActions} from 'features/AuthByUsername/model/slice/loginSlice'
import {getLoginState} from '../../model/selectors/getLoginState/getLoginState'
import {loginByUsername} from '../../model/services/loginByUsername/loginByUsername'
import {useLoadingState} from '../../model/hooks/useLoadingState'
import {Text, TextTheme} from 'shared/ui/Text/Text'

interface LoginFormProps {
	className?: string
}

export const LoginForm = memo(({className}: LoginFormProps) => {
	const {t} = useTranslation()
	const dispatch = useDispatch()
	const {username, password, error} = useSelector(getLoginState)
	const isItPending = useLoadingState()

	const onChangeUserName = useCallback(
		(value: string) => {
			dispatch(loginActions.setUsername(value))
		},
		[dispatch]
	)

	const onChangePassword = useCallback(
		(value: string) => {
			dispatch(loginActions.setPassword(value))
		},
		[dispatch]
	)

	const onLoginClick = useCallback(() => {
		dispatch(loginByUsername({username, password}))
	}, [dispatch, username, password])

	return (
		<div className={classNames(cls.LoginForm, {}, [className])}>
			<Text title={t('Login Form')} />
			{error && (
				<Text
					text={t('Password is incorrect')}
					theme={TextTheme.ERROR}
				/>
			)}
			<Input
				type='text'
				className={cls.input}
				placeholder={t('input username') + ':'}
				autofocus
				onChange={onChangeUserName}
				value={username}
			/>
			<Input
				type='text'
				className={cls.input}
				placeholder={t('input password') + ':'}
				onChange={onChangePassword}
				value={password}
			/>
			<Button
				theme={ThemeButton.OUTLINE}
				className={cls.loginBtn}
				onClick={onLoginClick}
				disabled={isItPending}
			>
				{t('login')}
			</Button>
		</div>
	)
})
