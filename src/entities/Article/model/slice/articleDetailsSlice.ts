import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import {Article} from '../types/article'
import {ArticleSchema} from '../types/articleSchema'
import {fetchArticleData} from '../services/fetchArticleData/fetchArticleData'

const initialState: ArticleSchema = {
	loading: false,
	error: undefined,
	data: undefined
}

export const articleDetailsSlice = createSlice({
	name: 'articleDetails',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(fetchArticleData.pending, (state) => {
					state.error = undefined
					state.loading = true
					// state.currentRequestId = action.meta.requestId
			})
			.addCase(fetchArticleData.fulfilled, (state, action: PayloadAction<Article>) => {
				state.loading = false
				state.data = action.payload
			})
			.addCase(fetchArticleData.rejected, (state, action) => {
				// const {requestId} = action.meta
					state.loading = false
					state.error = action.payload
					// state.currentRequestId = undefined
			})
	}
})

export const {actions: articleDetailsAction} = articleDetailsSlice
export const {reducer: articleDetailsReducer} = articleDetailsSlice
