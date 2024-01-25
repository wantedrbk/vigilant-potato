import {createAsyncThunk} from '@reduxjs/toolkit'
import {ThunkConfig} from 'app/providers/StoreProvider'
import {Article} from 'entities/Article'
import {User, UserSchema} from 'entities/User'
import {MiniProfile, Profile} from 'entities/Profile'

export const fetchMiniProfileDataByArticleId = createAsyncThunk<
	MiniProfile,
	string,
	ThunkConfig<string>
>('articleDetailsPage/fetchMiniProfileDataByArticleId', async (articleId, thunkApi) => {
	const {extra, rejectWithValue} = thunkApi

	try {
		const response = await extra.api.get<MiniProfile>('/profile/' + articleId)

		if (!response.data) {
			throw new Error()
		}
		const miniProfile: MiniProfile = {
			id: response.data.id,
			firstname: response.data.firstname,
			lastname: response.data.lastname,
			username: response.data.username,
			avatar: response.data.avatar
		}

		return miniProfile
	} catch (e) {
		return rejectWithValue('error')
	}
})
