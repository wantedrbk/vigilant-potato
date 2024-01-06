import {useCallback, useEffect} from 'react'
import {
	DynamicModuleLoader,
	ReducersList
} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import {
	fetchProfileData,
	getProfileError,
	getProfileForm,
	getProfileLoading,
	getProfileReadOnly,
	getProfileValidateErrors,
	profileActions,
	ProfileCard,
	profileReducer
} from 'entities/Profile'
import {useAppDispatch} from 'shared/lib/hooks/useAppDispatch'
import {useSelector} from 'react-redux'
import {classNames} from 'shared/lib/classNames/classNames'
import ProfilePageHeader from 'entities/Profile/ui/ProfileHeader/ProfilePageHeader'
import {Currency} from 'entities/Currency/model/types/currency'
import {Country} from 'entities/Country/model/types/country'
import {Text, TextAlign} from 'shared/ui/Text/Text'
import {TextTheme} from 'shared/ui/Text/Text'
import {ValidateProfileError} from 'entities/Profile'
import {useTranslation} from 'react-i18next'
import {useParams} from 'react-router-dom'
import {useInitialEffect} from 'shared/lib/hooks/useInitialEffect'

const reducers: ReducersList = {
	profile: profileReducer
}

interface ProfilePageProps {
	className?: string
}

const ProfilePage = ({className}: ProfilePageProps) => {
	const {t} = useTranslation('profile')
	const dispatch = useAppDispatch()
	const form = useSelector(getProfileForm)
	const loading = useSelector(getProfileLoading)
	const error = useSelector(getProfileError)
	const readonly = useSelector(getProfileReadOnly)
	const validateErrors = useSelector(getProfileValidateErrors)
	const {id} = useParams<{id: string}>()
	
	const validateErrorTranslates = {
		[ValidateProfileError.SERVER_ERROR]: t('Серверная ошибка при сохранении'),
		[ValidateProfileError.INCORRECT_COUNTRY]: t('Некорректный регион'),
		[ValidateProfileError.NO_DATA]: t('Данные не указаны'),
		[ValidateProfileError.INCORRECT_USER_DATA]: t('Имя и фамилия обязательны'),
		[ValidateProfileError.INCORRECT_AGE]: t('Некорректный возраст')
	}
	useInitialEffect(() => {
		if(id) {
			dispatch(fetchProfileData(id))
		}
	})
	
	const updateFirstName = useCallback(
		(value?: string) => {
			dispatch(profileActions.updateProfile({firstname: value || ''}))
		},
		[dispatch]
	)

	const updateLastName = useCallback(
		(value?: string) => {
			dispatch(profileActions.updateProfile({lastname: value || ''}))
		},
		[dispatch]
	)

	const updateUsername = useCallback(
		(value?: string) => {
			dispatch(profileActions.updateProfile({username: value || ''}))
		},
		[dispatch]
	)

	const updateAge = useCallback(
		(value?: number) => {
			dispatch(profileActions.updateProfile({age: Number(value || 0)}))
		},
		[dispatch]
	)

	const updateCity = useCallback(
		(value?: string) => {
			dispatch(profileActions.updateProfile({city: value || ''}))
		},
		[dispatch]
	)

	const updateCurrency = useCallback(
		(currency?: Currency) => {
			dispatch(profileActions.updateProfile({currency}))
		},
		[dispatch]
	)
	const updateCountry = useCallback(
		(country?: Country) => {
			dispatch(profileActions.updateProfile({country}))
		},
		[dispatch]
	)

	const updateAvatar = useCallback(
		(value?: string) => {
			dispatch(profileActions.updateProfile({avatar: value || ''}))
		},
		[dispatch]
	)

	return (
		<DynamicModuleLoader
			reducers={reducers}
			removeAfterUnmount
		>
			<div className={classNames('', {}, [className])}>
				<ProfilePageHeader />
				{validateErrors?.length &&
					validateErrors.map((err) => (
						<Text
							key={err}
							theme={TextTheme.ERROR}
							text={validateErrorTranslates[err]}
							align={TextAlign.CENTER}
						/>
					))}
				<ProfileCard
					loading={loading}
					error={error}
					data={form}
					onChangeFirstName={updateFirstName}
					onChangeLastName={updateLastName}
					onChangeAvatar={updateAvatar}
					onChangeUsername={updateUsername}
					onChangeAge={updateAge}
					onChangeCountry={updateCountry}
					onChangeCity={updateCity}
					onChangeCurrency={updateCurrency}
					readonly={readonly}
				/>
			</div>
		</DynamicModuleLoader>
	)
}
export default ProfilePage
