import { StateSchema } from 'app/providers/StoreProvider'


export const getArticleCommentsLoading = (data: StateSchema) => data?.articleDetailsComments?.loading
export const getArticleCommentsError = (data: StateSchema) => data?.articleDetailsComments?.error
