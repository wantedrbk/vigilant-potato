import {Country, Currency} from 'shared/const/common'

type Loading = 'idle' | 'pending' | 'succeeded' | 'failed'

export interface Profile {
	firstname: string
	lastname: string
	age: '26'
	currency: Currency
	country: Country
	city: string
	username: string
	avatar: string
}

export interface ProfileSchema {
	data?: Profile
	loading: Loading
	error?: string | null
	readonly: boolean
	currentRequestId?: string
}
