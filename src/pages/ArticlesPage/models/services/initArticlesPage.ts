import {createAsyncThunk} from '@reduxjs/toolkit'
import {ThunkConfig} from 'app/providers/StoreProvider'
import {getArticleInited} from 'pages/ArticlesPage/models/selectors/articleSelectors'
import {articlePageActions} from 'pages/ArticlesPage/models/slices/ArticlePageSlice'
import {fetchAllArticles} from 'pages/ArticlesPage/models/services/fecthAllArticles'

export const initArticlesPage = createAsyncThunk<
	void,
	void,
	ThunkConfig<string>
>('articlePage/initArticlePage', async (_, thunkApi) => {
		const {getState, dispatch} = thunkApi
		
		const inited = getArticleInited(getState())
	
		if (!inited) {
			dispatch(articlePageActions.initState());
			dispatch(fetchAllArticles({
				page: 1
			}))
		}
	},
);
