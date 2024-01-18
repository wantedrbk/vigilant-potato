import {createAsyncThunk} from '@reduxjs/toolkit'
import {ThunkConfig} from 'app/providers/StoreProvider'
import {Article} from 'entities/Article'
import {getArticlePageLimit, getArticlePageType} from 'pages/ArticlesPage'
import {
	getArticlePageNumber,
	getArticlePageOrder,
	getArticlePageSearch,
	getArticlePageSort
} from '../../models/selectors/articleSelectors'
import {ArticleType} from 'entities/Article/model/types/article'
import {addQueryParams} from 'shared/lib/url/addQueryParams/addQueryParams'

interface FetchAllArticlesParams {
	replace?: boolean
}

export const fetchAllArticles = createAsyncThunk<
	Article[],
	FetchAllArticlesParams,
	ThunkConfig<string>
>('articlePage/fetchAllArticles', async (args, thunkApi) => {
	const {extra, rejectWithValue, getState} = thunkApi
	const limit = getArticlePageLimit(getState())
	const page = getArticlePageNumber(getState())
	const order = getArticlePageOrder(getState())
	const sort = getArticlePageSort(getState())
	const search = getArticlePageSearch(getState())
	const type = getArticlePageType(getState())
	try {
		
		addQueryParams({
			order, sort, search
		});
		
		const response = await extra.api.get<Article[]>('/articles', {
			params: {
				_expand: 'user',
				_page: page,
				_limit: limit,
				_sort: sort,
				_order: order,
				q: search,
				type: type === ArticleType.ALL ? undefined : type,
			},
		});
		
		if (!response.data) {
			throw new Error();
		}
		
		return response.data;
	} catch (e) {
		return rejectWithValue('error');
	}
})
