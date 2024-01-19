import {createAsyncThunk} from '@reduxjs/toolkit'
import {USER_LOCALSTORAGE_KEY} from 'shared/const/localStorage'
import {ThunkConfig} from 'app/providers/StoreProvider/config/StateSchema'
import {getUserAuthData} from 'entities/User'
import {getArticleDetailsData} from 'entities/Article'
import {CommentCardType} from 'entities/Comments'
import {
	fetchCommentsData
} from '../fetchCommentsData/fetchCommentsData'
// import {addCommentFormAction} from 'features/addNewComment/model/slice/addCommentFormSlice'

export const addCommentForArticle = createAsyncThunk<CommentCardType, string, ThunkConfig<string>>(
	'articleDetailsPage/addCommentForm',
	async (text, thunkApi) => {
		const {extra, dispatch, rejectWithValue, getState} = thunkApi
		
		const userData = getUserAuthData(getState())
		const article = getArticleDetailsData(getState())
		
		if( !userData || !text || !article) {
			return rejectWithValue('no data')
		}
		
		try {
			const response = await extra.api.post<CommentCardType>('/comments', {
				articleId: article?.id,
				text: text,
				userId: userData?.id,
			})
			
			if (!response.data) {
				throw new Error()
			}
			
			dispatch(fetchCommentsData(article.id));
			
			return response.data
		} catch (error) {
			return rejectWithValue('error')
		}
	}
)
