import {createAsyncThunk} from '@reduxjs/toolkit'
import {Profile} from '../../types/profile'
import {ThunkConfig} from 'app/providers/StoreProvider'

export const fetchProfileData = createAsyncThunk<Profile, void, ThunkConfig<string>>(
	'profile/fetchProfileData',
	async (_, thunkApi) => {
		const {extra, rejectWithValue} = thunkApi
		try {
			// eslint-disable-next-line @typescript-eslint/ban-ts-comment
			// @ts-ignore
			const response = await extra.api.get<Profile>('/profile')

			// const response = await thunkApi.extra.api()

			return response.data
		} catch (error) {
			return rejectWithValue('error')
		}
	}
)
