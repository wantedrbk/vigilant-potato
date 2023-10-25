import {createAsyncThunk} from '@reduxjs/toolkit'
import {User, userActions} from 'entities/User'
import {USER_LOCALSTORAGE_KEY} from 'shared/const/localStorage'
import {ThunkConfig} from 'app/providers/StoreProvider/config/StateSchema'

interface LoginByUsernameProps {
	username: string
	password: string
}

export const loginByUsername = createAsyncThunk<User, LoginByUsernameProps, ThunkConfig<string>>(
	'login/fetchByIdStatus',
	async (AuthData: LoginByUsernameProps, thunkApi) => {
		const {extra, dispatch, rejectWithValue} = thunkApi

		try {
			const response = await extra.api.post<User>('/login', AuthData)

			// const response = await thunkApi .extra.api()

			console.log(response)
			if (!response.data) {
				throw new Error()
			}

			localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(response.data))
			dispatch(userActions.setAuthData(response.data))

			return response.data
		} catch (error) {
			return rejectWithValue('error')
		}
	}
)
