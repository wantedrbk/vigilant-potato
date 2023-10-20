// import {createAsyncThunk} from '@reduxjs/toolkit/dist/createAsyncThunk'
// import axios from 'axios'
// import {User, userActions} from 'entities/User'
// import {USER_LOCALSTORAGE_KEY} from 'shared/const/localStorage'
//
// interface LoginByUsername {
// 	username: string
// 	password: string
// }
//
// export const fetchProfileData = createAsyncThunk<User, void, {rejectValue: string}>(
// 	'login/fetchByIdStatus',
// 	async (AuthData: LoginByUsername, thunkApi) => {
// 		const {extra, dispatch, rejectWithValue} = thunkApi
// 		try {
// 			// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// 			// @ts-ignore
// 			const response = await axios.post('http://localhost:8000/login', AuthData)
//
// 			// const response = await thunkApi.extra.api()
//
// 			console.log(response)
// 			if (!response.data) {
// 				throw new Error()
// 			}
//
// 			localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(response.data))
// 			dispatch(userActions.setAuthData(response.data))
//
// 			return response.data
// 		} catch (error) {
// 			return rejectWithValue('error')
// 		}
// 	}
// )
