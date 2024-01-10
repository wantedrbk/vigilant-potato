import {createAsyncThunk} from '@reduxjs/toolkit'
import {ThunkConfig} from 'app/providers/StoreProvider'
import {Article} from '../../types/article'

export const fetchArticleData = createAsyncThunk<Article, string, ThunkConfig<string>>(
	'articleDetails/fetchArticleById',
	async (articleId, thunkApi) => {
		const {extra, rejectWithValue} = thunkApi

		try {
			const response = await extra.api.get<Article>('/articles/' + articleId)

			if (!response.data) {
				throw new Error()
			}
			console.log(response)
			return response.data
		} catch (e) {
			return rejectWithValue('error')
		}
	}
)