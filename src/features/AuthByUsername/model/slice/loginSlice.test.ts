import {LoginSchema} from '../types/loginSchema'
import {loginActions, loginReducer} from './loginSlice'

describe('loginSlice', () => {
	test('test set username', () => {
		const state: DeepPartial<LoginSchema> = {username: '123'}
		expect(
			loginReducer(state as LoginSchema, loginActions.setUsername('123123'))
		).toStrictEqual({
			username: '123123'
		})
	})

	test('test set password', () => {
		const state: DeepPartial<LoginSchema> = {password: '123'}
		expect(
			loginReducer(state as LoginSchema, loginActions.setPassword('123123'))
		).toStrictEqual({
			password: '123123'
		})
	})
})
