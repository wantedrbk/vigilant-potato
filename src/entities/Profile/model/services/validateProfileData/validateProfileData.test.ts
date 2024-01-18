import {validateProfileData} from './validateProfileData'
import {Profile, ValidateProfileError} from 'entities/Profile'

describe('validateProfileData', () => {
	it('should return error when no data provided', () => {
		expect(validateProfileData()).toEqual([ValidateProfileError.NO_DATA])
	})

	it('should return error when missing user data', () => {
		const profile: Profile = {
			firstname: '',
			lastname: '',
			username: ''
		}
		expect(validateProfileData(profile)).toContainEqual(
			ValidateProfileError.INCORRECT_USER_DATA
		)
	})

	it('should return error when incorrect age', () => {
		const profile: Profile = {
			firstname: 'John',
			lastname: 'Doe',
			username: 'johndoe',
			age: 'fdd' as any
		}
		expect(validateProfileData(profile)).toContainEqual(ValidateProfileError.INCORRECT_AGE)
	})

	it('should return error when incorrect country', () => {
		const profile: Profile = {
			firstname: 'John',
			lastname: 'Doe',
			username: 'johndoe',
			age: '4'
		}
		expect(validateProfileData(profile)).toContainEqual(ValidateProfileError.INCORRECT_COUNTRY)
	})
})
