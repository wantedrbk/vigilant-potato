import {StateSchema} from 'app/providers/StoreProvider'
import {ArticleViewType} from 'entities/Article'
import {ArticleType} from 'entities/Article/model/types/article'

export const getArticleLoading = (data: StateSchema) => data?.articlePage?.loading || false;
export const getArticleError = (data: StateSchema) => data?.articlePage?.error
export const getArticlesPageView = (state: StateSchema) => state.articlePage?.view || ArticleViewType.GRID;

export const getArticlePageLimit = (state: StateSchema) => state.articlePage?.limit || 9;
export const getArticlePageHasMore = (state: StateSchema) => state.articlePage?.hasMore
export const getArticlePageNumber = (state: StateSchema) => state.articlePage?.page || 1;
export const getArticleInited = (state: StateSchema) => state.articlePage?._inited;
export const getArticlePageOrder = (state: StateSchema) => state.articlePage?.order ?? 'asc';
export const getArticlePageSort = (state: StateSchema) => state.articlePage?.sort;
export const getArticlePageSearch = (state: StateSchema) => state.articlePage?.search ?? '';
export const getArticlePageType = (state: StateSchema) => state.articlePage?.type ?? ArticleType.ALL
