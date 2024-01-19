import { StateSchema } from 'app/providers/StoreProvider'


export const getArticleRecommendationsLoading = (data: StateSchema) =>
	data?.articleDetailsPage?.recommendations?.loading
export const getArticleRecommendationsError  = (data: StateSchema) =>
	data?.articleDetailsPage?.recommendations?.error
