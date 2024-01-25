// import {createAsyncThunk} from '@reduxjs/toolkit'
// import {ThunkConfig} from 'app/providers/StoreProvider/config/StateSchema'
// import {getUserAuthData} from 'entities/User'
// import {Article} from 'entities/Article'
//
// export const addArticle = createAsyncThunk<Article, void, ThunkConfig<string>>(
// 	'articleDetailsPage/addCommentForm',
// 	async (_, thunkApi) => {
// 		const {extra, rejectWithValue, getState} = thunkApi
//
// 		const userData = getUserAuthData(getState())
// 		const blocks = getArticleCreateBlocks(getState())
// 		const type = getArticleCreateType(getState())
// 		const title = getArticleCreateTitle(getState())
// 		const subtitle = getArticleCreateSubtitle(getState())
// 		const img = getArticleCreateImg(getState())
// 		const createdAt = new Date().toLocaleDateString('en-GB', {
// 			day: '2-digit',
// 			month: '2-digit',
// 			year: 'numeric'
// 		})
//
// 		if (!userData || !title || !subtitle) {
// 			return rejectWithValue('no data')
// 		}
//
// 		try {
// 			// @ts-ignore
// 			const response = await extra.api.post<Article>('/articles', {
// 				title: title,
// 				subtitle: subtitle,
// 				img: img,
// 				views: 0,
// 				createdAt: createdAt,
// 				userId: userData?.id,
// 				type: type,
// 				blocks: blocks
// 			})
//
// 			if (!response.data) {
// 				throw new Error()
// 			}
//
// 			return response.data
// 		} catch (error) {
// 			return rejectWithValue('error')
// 		}
// 	}
// )
