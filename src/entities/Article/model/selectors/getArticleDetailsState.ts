import {StateSchema} from 'app/providers/StoreProvider'
//articles state
export const getArticleDetailsData = (state: StateSchema) => state.articleDetails?.data
export const getArticleUserId = (state: StateSchema) => state.articleDetails?.data?.user.id

export const getArticleDetailsLoading = (state: StateSchema) => state.articleDetails?.loading

export const getArticleDetailsError = (state: StateSchema) => state.articleDetails?.error

// miniProfile state
export const getArticleMiniProfileLoading = (state: StateSchema) => state.miniProfile?.loading

export const getArticleMiniProfileError = (state: StateSchema) => state.miniProfile?.error

export const getMiniProfile = (state: StateSchema) => state.miniProfile?.profile
