import {StateSchema} from 'app/providers/StoreProvider'
import {ArticleViewType} from 'entities/Article'

export const getArticleLoading = (data: StateSchema) => data?.articlePage?.loading || false;
export const getArticleError = (data: StateSchema) => data?.articlePage?.error
export const getArticlesPageView = (state: StateSchema) => state.articlePage?.view || ArticleViewType.GRID;

export const getArticlePageLimit = (state: StateSchema) => state.articlePage?.limit || 9;
export const getArticlePageHasMore = (state: StateSchema) => state.articlePage?.hasMore
export const getArticlePageNumber = (state: StateSchema) => state.articlePage?.page || 1;
export const getArticleInited = (state: StateSchema) => state.articlePage?._inited;