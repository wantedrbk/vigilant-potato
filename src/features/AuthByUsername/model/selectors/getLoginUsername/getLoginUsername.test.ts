import {DeepPartial} from '@reduxjs/toolkit'
import {getLoginUsername} from './getLoginUsername'
import {StateSchema} from 'app/providers/StoreProvider'

describe('getLoginUsername', () => {
	it('should return the login username from the state', () => {
		const state: DeepPartial<StateSchema> = {
			loginForm: {
				username: 'testuser'
			}
		}

		const result = getLoginUsername(state as StateSchema)

		expect(result).toEqual('testuser')
	})

	it('should return an empty string if the login username is not present in the state', () => {
		const state: DeepPartial<StateSchema> = {}

		const result = getLoginUsername(state as StateSchema)

		expect(result).toEqual('')
	})
})
