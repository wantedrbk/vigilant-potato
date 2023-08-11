// import {loginByUsername} from './loginByUsername'
// import {UserSchema} from 'entities/User'
//
// type ResponseData = {
// 	data: UserSchema | null
// }
//
// describe('loginByUsername', () => {
// 	const AuthData = {username: 'testuser', password: 'testpassword'}
//
// 	beforeEach(() => {
// 		jest.clearAllMocks()
// 	})
//
// 	it('should return a user object when login is successful', async () => {
// 		const response = {data: {id: 1, username: 'testuser'}}
// 		jest.spyOn(localStorage, 'setItem')
// 		jest.spyOn(global, 'fetch').mockResolvedValueOnce({
// 			json: jest.fn().mockResolvedValueOnce(response.data)
// 		})
// 		const result = await loginByUsername(AuthData)
//
// 		expect(result).toEqual(response.data)
// 		expect(localStorage.setItem).toHaveBeenCalledWith(
// 			'USER_LOCALSTORAGE_KEY',
// 			JSON.stringify(response.data)
// 		)
// 	})
//
// 	it('should throw an error when login fails', async () => {
// 		const error = new Error('error')
// 		jest.spyOn(global, 'fetch').mockRejectedValueOnce(error)
//
// 		await expect(loginByUsername(AuthData)).rejects.toThrow(error)
// 	})
//
// 	it('should reject with an error message when password is incorrect', async () => {
// 		const response = {data: null}
// 		jest.spyOn(global, 'fetch').mockResolvedValueOnce({
// 			json: jest.fn().mockResolvedValueOnce(response.data)
// 		})
//
// 		const result = await loginByUsername(AuthData)
//
// 		expect(result).toBeInstanceOf(Error)
// 		expect(result.message).toBe('Password is incorrect')
// 	})
// })
