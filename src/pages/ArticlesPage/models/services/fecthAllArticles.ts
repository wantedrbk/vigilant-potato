import {createAsyncThunk} from '@reduxjs/toolkit'
import {ThunkConfig} from 'app/providers/StoreProvider'
import {Article} from 'entities/Article'

export const fetchAllArticles = createAsyncThunk<
	Article[],
	void,
	ThunkConfig<string>
>('articlePage/fetchAllArticles', async (_, thunkApi) => {
	const {extra, rejectWithValue} = thunkApi
	
	
	try {
		const response = await extra.api.get<Article[]>('/articles', {
			params: {
				_expand: 'user',
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
