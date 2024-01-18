import {createAsyncThunk} from '@reduxjs/toolkit'
import {ThunkConfig} from 'app/providers/StoreProvider'
import {getArticleInited} from 'pages/ArticlesPage/models/selectors/articleSelectors'
import {articlePageActions} from 'pages/ArticlesPage/models/slices/ArticlePageSlice'
import {fetchAllArticles} from 'pages/ArticlesPage/models/services/fecthAllArticles'
import {SortOrder} from 'shared/types'
import {ArticleSortField} from 'entities/Article/model/types/article'
import {ArticlePageSchema} from 'pages/ArticlesPage'


type OptionalArticlePageSchema = {
	[P in keyof ArticlePageSchema]?: ArticlePageSchema[P];
}

export const initArticlesPage = createAsyncThunk<
	void,
	URLSearchParams,
	ThunkConfig<string>
>('articlePage/initArticlePage', async (searchParams, thunkApi) => {
		const {getState, dispatch} = thunkApi
		
		const inited = getArticleInited(getState())
		if (!inited) {
			const orderFromUrl = searchParams.get('order') as SortOrder
			const sortFromUrl = searchParams.get('sort') as ArticleSortField
			const searchFromUrl = searchParams.get('q') as string
			
			if(orderFromUrl) {
				dispatch(articlePageActions.setOrder(orderFromUrl))
			}
			if(sortFromUrl) {
				dispatch(articlePageActions.setSort(sortFromUrl))
			}
			if(searchFromUrl) {
				dispatch(articlePageActions.setSearch(searchFromUrl))
			}
			
			dispatch(articlePageActions.initState());
			dispatch(fetchAllArticles({})
			)
			
		}
	},
);
