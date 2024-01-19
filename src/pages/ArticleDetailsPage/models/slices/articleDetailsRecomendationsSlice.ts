import {createEntityAdapter, createSlice} from '@reduxjs/toolkit'
import {StateSchema} from 'app/providers/StoreProvider'
// eslint-disable-next-line max-len
import {Article} from 'entities/Article'
import {
	ArticleDetailsRecommendationsSchema
} from 'pages/ArticleDetailsPage/models/types/ArticleDetailsRecommendationsSchema'
import {
	fetchArticleRecommendations
} from 'pages/ArticleDetailsPage/models/services/fetchArticleRecommendations/fetchArticleRecommendations'


const recommendationsAdapter = createEntityAdapter<Article>({
	// Assume IDs are stored in a field other than `comment.id`
	selectId: (article) => article.id
})
//
export const getArticleRecommendations = recommendationsAdapter.getSelectors<StateSchema>(
	(state) => state.articleDetailsPage?.recommendations || recommendationsAdapter.getInitialState()
)

const articleDetailsRecommendationsSlice = createSlice({
	name: 'articleDetailsRecommendationsSlice',
	initialState: recommendationsAdapter.getInitialState<ArticleDetailsRecommendationsSchema>({
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
		//action.meta.arg.replace
	},
	extraReducers: (builder) => {
		builder
			.addCase(fetchArticleRecommendations.pending, (state) => {
				state.error = undefined;
				state.loading = true;
			})
			.addCase(fetchArticleRecommendations.fulfilled, (
				state,
				action,
			) => {
				state.loading = false;
				recommendationsAdapter.setAll(state, action.payload);
			})
			.addCase(fetchArticleRecommendations.rejected, (state, action) => {
				state.loading = false;
				state.error = action.payload;
			});
	// 		.addCase(fetchArticleData.pending, (state) => {
	// 			state.error = undefined
	// 			state.loading = true
	// 		})
	// 		.addCase(
	// 			fetchArticleData.fulfilled,
	// 			(state, action: PayloadAction<Article[]>) => {
	// 				state.loading = false
	// 				// commentsAdapter.setAll(state, action.payload)
	// 			}
	// 		)
	// 		.addCase(fetchArticleData.rejected, (state, action) => {
	// 			// const {requestId} = action.meta
	// 			state.loading = false
	// 			state.error = action.payload
	// 			// state.currentRequestId = undefined
	// 		})
	}
})

export const {reducer: articleDetailsRecommendationsReducer } = articleDetailsRecommendationsSlice
export const {actions: articleDetailsRecommendationsAction } = articleDetailsRecommendationsSlice

