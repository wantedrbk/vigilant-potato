import { StateSchema } from 'app/providers/StoreProvider'

export const getArticleCommentsLoading = (data: StateSchema) => data?.articleDetailsPage?.comments?.loading
export const getArticleCommentsError = (data: StateSchema) => data?.articleDetailsPage?.comments?.error
