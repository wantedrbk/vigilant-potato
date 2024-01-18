import {Currency} from 'entities/Currency/model/types/currency'
import {Country} from 'entities/Country/model/types/country'

type Loading = 'idle' | 'pending' | 'succeeded' | 'failed'

export enum ValidateProfileError {
	INCORRECT_USER_DATA = 'INCORRECT USER DATA',
	INCORRECT_AGE = 'INCORRECT AGE',
	INCORRECT_COUNTRY = 'INCORRECT COUNTRY',
	NO_DATA = 'NO DATA',
	SERVER_ERROR = 'SERVER ERROR'
}

export interface Profile {
	id?: string
	firstname?: string
	lastname?: string
	age?: string
	currency?: Currency
	country?: Country
	city?: string
	username?: string
	avatar?: string
}

export interface ProfileSchema {
	data?: Profile
	form?: Profile
	loading: Loading
	error?: string
	readonly: boolean
	currentRequestId?: string
	validateErrors?: ValidateProfileError[]
}
