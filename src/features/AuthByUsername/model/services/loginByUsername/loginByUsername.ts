import {createAsyncThunk} from '@reduxjs/toolkit'
import {User, userActions} from 'entities/User'
import {USER_LOCALSTORAGE_KEY} from 'shared/const/localStorage'
import {ThunkConfig} from 'app/providers/StoreProvider'

interface LoginByUsername {
	username: string
	password: string
}

export const loginByUsername = createAsyncThunk<User, LoginByUsername, ThunkConfig<string>>(
	'login/fetchByIdStatus',
	async (AuthData: LoginByUsername, thunkApi) => {
		const {extra, dispatch, rejectWithValue} = thunkApi
		try {
			// eslint-disable-next-line @typescript-eslint/ban-ts-comment
			// @ts-ignore
			const response = await extra.api.post<User>('/login', AuthData)

			// const response = await thunkApi.extra.api()

			console.log(response)
			if (!response.data) {
				throw new Error()
			}

			localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(response.data))
			dispatch(userActions.setAuthData(response.data))

			extra.navigate('/about')

			return response.data
		} catch (error) {
			return rejectWithValue('error')
		}
	}
)
