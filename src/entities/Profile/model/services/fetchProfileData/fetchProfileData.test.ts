import {fetchProfileData} from './fetchProfileData'
import {TestAsyncThunk} from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk'

const data = {
	firstname: 'dsfdsfs',
	lastname: 'jjjj',
	age: 51,
	currency: 'EUR',
	country: 'Spain',
	city: '盐城',
	username: 'wantedrbk',
	avatar: 'https://i.imgur.com/WfBfQPM.png'
}

describe('Test fetchProfileData', () => {
	it('Success', async () => {
		const thunk = new TestAsyncThunk(fetchProfileData)
		thunk.api.get.mockResolvedValueOnce({data: data})

		const result = await thunk.callThunk()

		expect(thunk.api.get).toHaveBeenCalled()
		expect(result.meta.requestStatus).toEqual('fulfilled')
		expect(result.payload).toEqual(data)
	})

	it('Should handle error fetching profile data', async () => {
		const thunk = new TestAsyncThunk(fetchProfileData)
		thunk.api.get.mockReturnValue(Promise.resolve({status: 403}))
		const result = await thunk.callThunk()

		expect(result.meta.requestStatus).toBe('rejected')
	})
})
