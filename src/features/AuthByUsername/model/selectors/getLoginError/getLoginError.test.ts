import {getLoginError} from './getLoginError'
import {StateSchema} from 'app/providers/StoreProvider'

describe('getLoginError', () => {
	it('should return the login error from the state', () => {
		const state: DeepPartial<StateSchema> = {
			loginForm: {
				error: 'Invalid username or password'
			}
		}
		expect(getLoginError(state as StateSchema)).toEqual('Invalid username or password')
	})

	it('should return undefined if the login error is not present in the state', () => {
		const state = {}

		const result = getLoginError(state as StateSchema)

		expect(result).toBeUndefined()
	})
})
