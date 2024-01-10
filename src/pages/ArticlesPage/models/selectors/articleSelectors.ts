import {StateSchema} from 'app/providers/StoreProvider'
import {ArticleViewType} from 'entities/Article'

export const getArticleLoading = (data: StateSchema) => data?.articlePage?.loading || false;
export const getArticleError = (data: StateSchema) => data?.articlePage?.error
export const getArticlesPageView = (state: StateSchema) => state.articlePage?.view || ArticleViewType.GRID;
