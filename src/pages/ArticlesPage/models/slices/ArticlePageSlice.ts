import {createEntityAdapter, createSlice, PayloadAction} from '@reduxjs/toolkit'
import {CommentCardType} from 'entities/Comments'
import {StateSchema} from 'app/providers/StoreProvider'
import {Article, ArticleViewType} from 'entities/Article'
import {ArticlePageSchema} from 'pages/ArticlesPage/models/types/ArticlePageSchema'
import {fetchAllArticles} from 'pages/ArticlesPage/models/services/fecthAllArticles'
import {ARTICLES_VIEW_LOCALSTORAGE_KEY} from 'shared/const/localStorage'
// eslint-disable-next-line max-len

const articleAdapter = createEntityAdapter({
	// Assume IDs are stored in a field other than `comment.id`
	selectId: (article: Article) => article.id
})

export const getArticles = articleAdapter.getSelectors<StateSchema>(
	(state) => state.articlePage || articleAdapter.getInitialState()
)

const articlePageSlice = createSlice({
	name: 'articleDetailsCommentsSlice',
	initialState: articleAdapter.getInitialState<ArticlePageSchema>({
		loading: false,
		error: undefined,
		view: ArticleViewType.GRID,
		ids: [],
		entities: {}
	}),
	reducers: {
		setView : (state, action: PayloadAction<ArticleViewType>) => {
			state.view = action.payload
			localStorage.setItem(ARTICLES_VIEW_LOCALSTORAGE_KEY, action.payload);
		},
		initState: (state) => {
			state.view = localStorage.getItem(ARTICLES_VIEW_LOCALSTORAGE_KEY) as ArticleViewType;
		},
		
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
			.addCase(fetchAllArticles.pending, (state) => {
				state.error = undefined
				state.loading = true
			})
			.addCase(
				fetchAllArticles.fulfilled,
				(state, action: PayloadAction<Article[]>) => {
					state.loading = false
					articleAdapter.setAll(state, action.payload)
				}
			)
			.addCase(fetchAllArticles.rejected, (state, action) => {
				// const {requestId} = action.meta
				state.loading = false
				state.error = action.payload
				// state.currentRequestId = undefined
			})
	}
})

export const {reducer: articlePageReducer} = articlePageSlice
export const {actions: articlePageActions} = articlePageSlice

