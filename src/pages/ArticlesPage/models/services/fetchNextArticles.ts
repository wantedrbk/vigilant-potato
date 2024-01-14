import {createAsyncThunk} from '@reduxjs/toolkit'
import {ThunkConfig} from 'app/providers/StoreProvider'
import {getArticleLoading, getArticlePageHasMore, getArticlePageLimit} from 'pages/ArticlesPage'
import {getArticlePageNumber} from 'pages/ArticlesPage/models/selectors/articleSelectors'
import {articlePageActions} from 'pages/ArticlesPage/models/slices/ArticlePageSlice'
import {fetchAllArticles} from 'pages/ArticlesPage/models/services/fecthAllArticles'

export const fetchNextArticles = createAsyncThunk<
	void,
	void,
	ThunkConfig<string>
>('articlePage/fetchNextArticles', async (_, thunkApi) => {
	const {getState, dispatch} = thunkApi
	
	const pageNum = getArticlePageNumber(getState())
	const hasMore = getArticlePageHasMore(getState())
	const isLoading = getArticleLoading(getState())
	
	
	if (hasMore && !isLoading) {
		dispatch(articlePageActions.setPage(pageNum + 1));
		dispatch(fetchAllArticles({
			page: pageNum + 1,
		}));
	}
	},
);
