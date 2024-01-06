import {createAsyncThunk} from '@reduxjs/toolkit'
import {ThunkConfig} from 'app/providers/StoreProvider'
import {Article} from '../../../../../entities/Article/model/types/article'
import {CommentCardType} from 'entities/Comments'
import {ArticleDetailsCommentsSchema} from 'pages/ArticleDetailsPage'

export const fetchCommentsData = createAsyncThunk<
	CommentCardType[],
	string | undefined,
	ThunkConfig<string>
>('articleDetails/fetchCommentsData', async (articleId, thunkApi) => {
	const {extra, rejectWithValue} = thunkApi

	if (articleId == undefined) {
		return rejectWithValue('id error')
	}

	try {
		const response = await extra.api.get<CommentCardType[]>('/comments', {
			params: {
				articleId,
				_expand: 'user'
			}
		})

		if (!response.data) {
			throw new Error()
		}
		return response.data
	} catch (e) {
		return rejectWithValue('error')
	}
})
