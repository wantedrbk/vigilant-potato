import {Currency} from 'entities/Currency/model/types/currency'
import {Country} from 'entities/Country/model/types/country'

type Loading = 'idle' | 'pending' | 'succeeded' | 'failed'

export interface Profile {
	firstname?: string
	lastname?: string
	age?: number
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
}
