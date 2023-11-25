import {ChangeEvent, useCallback, useEffect, useState} from 'react'
import {
	DynamicModuleLoader,
	ReducersList
} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import {
	fetchProfileData,
	getProfileData,
	getProfileError,
	getProfileForm,
	getProfileLoading,
	getProfileReadOnly,
	profileActions,
	ProfileCard,
	profileReducer
} from 'entities/Profile'
import {useAppDispatch} from 'shared/lib/hooks/useAppDispatch'
import {useSelector} from 'react-redux'
import {classNames} from 'shared/lib/classNames/classNames'
import ProfilePageHeader from 'entities/Profile/ui/ProfileHeader/ProfilePageHeader'
import {useThrottle} from 'shared/lib/hooks/useThrottle'
import {Currency} from 'entities/Currency/model/types/currency'
import {Country} from 'entities/Country/model/types/country'

const reducers: ReducersList = {
	profile: profileReducer
}

interface ProfilePageProps {
	className?: string
}

const ProfilePage = ({className}: ProfilePageProps) => {
	const dispatch = useAppDispatch()
	const form = useSelector(getProfileForm)
	const loading = useSelector(getProfileLoading)
	const error = useSelector(getProfileError)
	const readonly = useSelector(getProfileReadOnly)

	useEffect(() => {
		dispatch(fetchProfileData())
	}, [dispatch])

	// const throttledUpdateFirstName = useThrottle({
	// 	callback: (value?: string) => {
	// 		dispatch(profileActions.updateProfile({firstname: value || ''}))
	// 	},
	// 	delay: 2000
	// })
	// const throttledUpdateLastName = useThrottle({
	// 	callback: (value?: string) => {
	// 		dispatch(profileActions.updateProfile({lastname: value || ''}))
	// 	},
	// 	delay: 2000
	// })
	// const handleFirstNameChange = (value: string) => {
	// 	setFirstName(value)
	// 	throttledUpdateFirstName(value)
	// }
	//
	// const handleLastNameChange = (value: string) => {
	// 	setLastName(value)
	// 	throttledUpdateLastName(value)
	// }

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

	const updateAvatar = useCallback(
		(value?: string) => {
			dispatch(profileActions.updateProfile({avatar: value || ''}))
		},
		[dispatch]
	)

	const updateAge = useCallback(
		(value?: number) => {
			const age = Number(value || 0)
			if (!isNaN(age) && age >= 0 && age <= 100) {
				dispatch(profileActions.updateProfile({age: age}))
			} else {
				// Handle invalid input here, e.g., show an error message
			}
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

	return (
		<DynamicModuleLoader
			reducers={reducers}
			removeAfterUnmount
		>
			<div className={classNames('', {}, [className])}>
				<ProfilePageHeader />
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
