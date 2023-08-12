import {DeepPartial} from '@reduxjs/toolkit'
import {getLoginLoading} from './getLoginLoading'
import {StateSchema} from 'app/providers/StoreProvider'

describe('getLoginLoading', () => {
	it('should return the login loading state from the state', () => {
		const state: DeepPartial<StateSchema> = {
			loginForm: {
				loading: 'pending'
			}
		}

		const result = getLoginLoading(state as StateSchema)

		expect(result).toEqual('pending')
	})

	it('should return "idle" if the login loading state is not present in the state', () => {
		const state = {}

		const result = getLoginLoading(state as StateSchema)

		expect(result).toEqual('idle')
	})
})
