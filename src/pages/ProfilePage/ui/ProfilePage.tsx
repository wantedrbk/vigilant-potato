import {useState} from 'react'
import {useTranslation} from 'react-i18next'
import {Input} from 'shared/ui/Input/Input'
import {
	DynamicModuleLoader,
	ReducersList
} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import {profileReducer} from 'entities/Profile'

const reducers: ReducersList = {
	profile: profileReducer
}

const ProfilePage = () => {
	const {t} = useTranslation()

	return (
		<DynamicModuleLoader
			reducers={reducers}
			removeAfterUnmount
		>
			<div>{t('Profile page')}</div>
		</DynamicModuleLoader>
	)
}
export default ProfilePage
