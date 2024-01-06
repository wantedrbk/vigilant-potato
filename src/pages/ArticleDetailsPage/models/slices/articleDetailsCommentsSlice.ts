import {createEntityAdapter, createSlice, PayloadAction} from '@reduxjs/toolkit'
import {CommentCardType} from 'entities/Comments'
import {StateSchema} from 'app/providers/StoreProvider'
import {ArticleDetailsCommentsSchema} from '../types/ArticleDetailsCommentsSchema'
import {fetchProfileData, Profile} from 'entities/Profile'
// eslint-disable-next-line max-len
import {fetchCommentsData} from 'pages/ArticleDetailsPage/models/services/fetchCommentsData/fetchCommentsData'

const commentsAdapter = createEntityAdapter({
	// Assume IDs are stored in a field other than `comment.id`
	selectId: (comment: CommentCardType) => comment.id
})

export const getArticleComments = commentsAdapter.getSelectors<StateSchema>(
	(state) => state.articleDetailsComments || commentsAdapter.getInitialState()
)

const articleDetailsCommentsSlice = createSlice({
	name: 'articleDetailsCommentsSlice',
	initialState: commentsAdapter.getInitialState<ArticleDetailsCommentsSchema>({
		loading: false,
		error: undefined,
		ids: [],
		entities: {}
	}),
	reducers: {
		// Can pass adapter functions directly as case reducers.  Because we're passing this
		// as a value, `createSlice` will auto-generate the `bookAdded` action type / creator
		// bookAdded: commentsAdapter.addOne,
		// booksReceived(state, action) {
		// 	// Or, call them as "mutating" helpers in a case reducer
		// 	commentsAdapter.setAll(state, action.payload.books)
		// }
	},
	extraReducers: (builder) => {
		builder
			.addCase(fetchCommentsData.pending, (state) => {
				state.error = undefined
				state.loading = true
			})
			.addCase(
				fetchCommentsData.fulfilled,
				(state, action: PayloadAction<CommentCardType[]>) => {
					state.loading = false
					commentsAdapter.setAll(state, action.payload)
				}
			)
			.addCase(fetchCommentsData.rejected, (state, action) => {
				// const {requestId} = action.meta
				state.loading = false
				state.error = action.payload
				// state.currentRequestId = undefined
			})
	}
})

export const {reducer: articleDetailsCommentsReducer} = articleDetailsCommentsSlice
export const {actions: articleDetailsCommentsActions} = articleDetailsCommentsSlice

