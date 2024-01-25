import {createSlice, PayloadAction} from '@reduxjs/toolkit'
// eslint-disable-next-line max-len
import {fetchMiniProfileDataByArticleId} from 'entities/Article/model/services/fetchProfileDataByArticleId/fetchMiniProfileDataByArticleId'
import {MiniProfile} from 'entities/Profile'
import {MiniProfilesSchema} from '../types/articleMiniProfileSchema'

const initialState: MiniProfilesSchema = {
	profile: undefined,
	loading: false,
	error: null
}

const articleDetailsMiniProfileSlice = createSlice({
	name: 'articleDetailsMiniProfile',
	initialState,
	reducers: {
		// Can pass adapter functions directly as case reducers.  Because we're passing this
		// as a value, `createSlice` will auto-generate the `bookAdded` action type / creator
		// bookAdded: commentsAdapter.addOne,
		// booksReceived(state, action) {
		// 	// Or, call them as "mutating" helpers in a case reducer
		// 	commentsAdapter.setAll(state, action.payload.books)
		// }
		//action.meta.arg.replace
	},
	extraReducers: (builder) => {
		builder
			.addCase(fetchMiniProfileDataByArticleId.pending, (state) => {
				state.error = null
				state.loading = true
			})
			.addCase(
				fetchMiniProfileDataByArticleId.fulfilled,
				(state, action: PayloadAction<MiniProfile>) => {
					state.loading = false
					state.profile = action.payload
				}
			)
			.addCase(fetchMiniProfileDataByArticleId.rejected, (state, action) => {
				state.loading = false
				state.error = action.payload as string
			})
	}
})

export const {reducer: articleDetailsMiniProfileReducer} = articleDetailsMiniProfileSlice
export const {actions: articleDetailsMiniProfileAction} = articleDetailsMiniProfileSlice
