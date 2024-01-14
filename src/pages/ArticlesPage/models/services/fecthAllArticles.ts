import {createAsyncThunk} from '@reduxjs/toolkit'
import {ThunkConfig} from 'app/providers/StoreProvider'
import {Article} from 'entities/Article'
import {getArticlePageLimit} from 'pages/ArticlesPage'

interface FetchAllArticlesParams {
	page?: number
	// limit: number
}

export const fetchAllArticles = createAsyncThunk<
	Article[],
	FetchAllArticlesParams,
	ThunkConfig<string>
>('articlePage/fetchAllArticles', async (args, thunkApi) => {
	const {extra, rejectWithValue, getState} = thunkApi
	const { page = 1 } = args
	const limit = getArticlePageLimit(getState())
	
	try {
		const response = await extra.api.get<Article[]>('/articles', {
			params: {
				_expand: 'user',
				_page: page,
				_limit: limit,
			},
		});
		
		if (!response.data) {
			throw new Error();
		}
		
		return response.data;
	} catch (e) {
		return rejectWithValue('error');
	}
})
