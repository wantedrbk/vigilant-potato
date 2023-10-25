import {getLoginPassword} from './getLoginPassword'
import {StateSchema} from 'app/providers/StoreProvider'

describe('getLoginPassword', () => {
	describe('when the password is present in the state', () => {
		it('should return the password from the state', () => {
			const state: DeepPartial<StateSchema> = {
				loginForm: {
					password: 'password123'
				}
			}

			const result = getLoginPassword(state as StateSchema)

			expect(result).toEqual('password123')
		})
	})

	describe('when the password is not present in the state', () => {
		it('should return an empty string', () => {
			const state: DeepPartial<StateSchema> = {}

			const result = getLoginPassword(state as StateSchema)

			expect(result).toEqual('')
		})
	})
})
