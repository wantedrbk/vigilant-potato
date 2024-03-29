import {Profile} from 'entities/Profile'
import {ValidateProfileError} from 'entities/Profile/model/types/profile'

export const validateProfileData = (profile?: Profile) => {
	if (!profile) {
		return [ValidateProfileError.NO_DATA]
	}
	const {firstname, lastname, age, country, username} = profile
	const errors: ValidateProfileError[] = []

	if (!username || !firstname || !lastname) {
		errors.push(ValidateProfileError.INCORRECT_USER_DATA)
	}
	if (!age || !Number.isInteger(age)) {
		errors.push(ValidateProfileError.INCORRECT_AGE)
	}

	if (!country) {
		errors.push(ValidateProfileError.INCORRECT_COUNTRY)
	}
	return errors
}

// testing with Jest
