import {createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios'
import {User, userActions} from 'entities/User'
import {USER_LOCALSTORAGE_KEY} from 'shared/const/localStorage'

interface LoginByUsername {
	username: string
	password: string
}

export const loginByUsername = createAsyncThunk<
	User,
	LoginByUsername,
	{rejectValue: string}
>('login/fetchByIdStatus', async (AuthData: LoginByUsername, thunkAPI) => {
	try {
		const response = await axios.post(
			'http://localhost:8000/login',
			AuthData
		)
		if (!response.data) {
			throw new Error('error')
		}

		localStorage.setItem(
			USER_LOCALSTORAGE_KEY,
			JSON.stringify(response.data)
		)
		thunkAPI.dispatch(userActions.setAuthData(response.data))

		return response.data
	} catch (error) {
		return thunkAPI.rejectWithValue('error')
	}
})
