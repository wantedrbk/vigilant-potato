import {PayloadAction} from '@reduxjs/toolkit'
import {Profile, ProfileSchema, ValidateProfileError} from '../types/profile'
import {fetchProfileData, updateProfileData} from 'entities/Profile'
import {profileSlice} from 'entities/Profile/model/slice/profileSlice'
import {Country} from 'entities/Country'

// Mock the initial state
const initialState: ProfileSchema = {
	readonly: true,
	loading: 'idle',
	error: undefined,
	data: undefined,
	form: undefined
}

describe('profileSlice', () => {
	it('should handle setReadOnly', () => {
		const action: PayloadAction<boolean> = {
			type: 'profile/setReadOnly',
			payload: false
		}
		const expectedState = {...initialState, readonly: action.payload}
		expect(profileSlice.reducer(initialState, action as PayloadAction<boolean>)).toEqual(
			expectedState
		)
	})

	it('should handle cancelEdit', () => {
		const form: Profile = {
			username: 'wantedrbk',
			firstname: 'David',
			lastname: 'Kostiuk',
			age: '33',
			country: Country.Spain
		}
		const initialStateWithData = {...initialState, form: form}
		const actual = profileSlice.reducer(initialStateWithData, profileSlice.actions.cancelEdit())
		expect(actual.readonly).toEqual(true)
		expect(actual.form).toBe(undefined)
	})

	it('should handle updateProfile', () => {
		const form: Profile = {
			username: 'wantedrbk',
			firstname: 'David',
			lastname: 'Maaa',
			age: '33',
			country: Country.Spain
		}
		const initialData = {...initialState, form: form}

		const updateProfilePayload: Profile = {username: 'sdfs', age: '54'}
		const action: PayloadAction<Profile> = {
			type: 'profile/updateProfile',
			payload: updateProfilePayload
		}
		const expectedState = {...initialData, form: {...form, ...updateProfilePayload}}
		expect(profileSlice.reducer(initialData, action)).toEqual(expectedState)
	})

	it('should handle submitForm', () => {
		const form: Profile = {
			username: 'wantedrbk',
			firstname: 'David',
			lastname: 'Maaa',
			age: '33',
			country: Country.Spain
		}
		const initialData = {...initialState, form: form}
		const expectedData = {...form}
		const actual = profileSlice.reducer(initialData, profileSlice.actions.submitForm())
		expect(actual.data).toEqual(expectedData)
	})

	it('should handle fetchProfileData.fulfilled', () => {
		const profileData: Profile = {
			username: 'wantedrbk',
			firstname: 'David',
			lastname: 'Maaa',
			age: '33',
			country: Country.Spain
		}
		const action: PayloadAction<Profile> = {
			type: fetchProfileData.fulfilled.type,
			payload: profileData
		}
		const expectedState = {
			...initialState,
			loading: 'succeeded',
			data: profileData,
			form: profileData
		}
		expect(profileSlice.reducer(initialState, action)).toEqual(expectedState)
	})

	it('should handle fetchProfileData.rejected', () => {
		const initialData: ProfileSchema = {...initialState, loading: 'pending'}
		const action: PayloadAction<string> = {
			type: fetchProfileData.rejected.type,
			payload: 'something got wrong'
		}
		const expectedState: ProfileSchema = {
			...initialState,
			loading: 'idle',
			error: action.payload
		}
		expect(profileSlice.reducer(initialData, action)).toStrictEqual(expectedState)
	})

	it('should handle updateProfileData.fulfilled', () => {
		const profileData: Profile = {
			username: 'wantedrbk',
			firstname: 'David',
			lastname: 'Maaa',
			age: '33',
			country: Country.Spain
		}
		const initialStateWithError = {
			...initialState,
			validateErrors: ValidateProfileError.INCORRECT_USER_DATA,
			readonly: false
		}

		const action: PayloadAction<Profile> = {
			type: updateProfileData.fulfilled.type,
			payload: profileData
		}
		const expectedState = {
			...initialStateWithError,
			loading: 'succeeded',
			data: profileData,
			form: profileData,
			validateErrors: undefined,
			readonly: true
		}
		expect(profileSlice.reducer(initialState, action)).toEqual(expectedState)
	})

	it('should handle updateProfileData.rejected', () => {
		const initialData: ProfileSchema = {...initialState, loading: 'pending'}

		const action: PayloadAction<ValidateProfileError[]> = {
			type: updateProfileData.rejected.type,
			payload: [ValidateProfileError.INCORRECT_USER_DATA]
		}
		const expectedState: ProfileSchema = {
			...initialState,
			loading: 'idle',
			validateErrors: action.payload
		}
		expect(profileSlice.reducer(initialData, action)).toStrictEqual(expectedState)
	})

	// Define your other async action tests like above test...
})
