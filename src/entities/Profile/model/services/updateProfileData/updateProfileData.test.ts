import {updateProfileData} from './updateProfileData'
import {TestAsyncThunk} from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk'
import {getProfileForm, ValidateProfileError} from 'entities/Profile'
import {Country} from 'entities/Country'
import {Currency} from 'entities/Currency'

const data = {
	firstname: 'dsfdsfs',
	lastname: 'jjjj',
	age: '51',
	currency: Currency.EUR,
	country: Country.Germany,
	city: '盐城',
	username: 'wantedrbk',
	avatar: 'https://i.imgur.com/WfBfQPM.png'
}

describe('TestPage updateProfileData fulfilled', () => {
	it('Success', async () => {
		const thunk = new TestAsyncThunk(updateProfileData, {
			profile: {
				form: data
			}
		})
		const formData = getProfileForm(thunk.getState())
		thunk.api.put.mockResolvedValueOnce({data: formData})

		const result = await thunk.callThunk('1')

		expect(thunk.api.put).toHaveBeenCalled()
		expect(result.meta.requestStatus).toEqual('fulfilled')
		expect(result.payload).toEqual(formData)
	})

	it('Should handle server error', async () => {
		const thunk = new TestAsyncThunk(updateProfileData, {
			profile: {
				form: data
			}
		})
		thunk.api.put.mockReturnValue(Promise.resolve({status: 403}))
		const result = await thunk.callThunk('1')

		expect(result.meta.requestStatus).toBe('rejected')
		expect(result.payload).toEqual([ValidateProfileError.SERVER_ERROR])
	})

	it('Should handle user error', async () => {
		const thunk = new TestAsyncThunk(updateProfileData, {
			profile: {
				form: {...data, lastname: ''}
			}
		})
		const result = await thunk.callThunk('1')

		expect(result.meta.requestStatus).toBe('rejected')
		expect(result.payload).toEqual([ValidateProfileError.INCORRECT_USER_DATA])
	})
})
