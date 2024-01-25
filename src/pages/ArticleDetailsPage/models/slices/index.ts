import {combineReducers} from '@reduxjs/toolkit'
import {ArticleDetailsPageSchema} from 'pages/ArticleDetailsPage/models/types'
import {articleDetailsCommentsReducer} from 'pages/ArticleDetailsPage/models/slices/articleDetailsCommentsSlice'
import {articleDetailsRecommendationsReducer} from 'pages/ArticleDetailsPage/models/slices/articleDetailsRecomendationsSlice'

export const articleDetailsPageReducer = combineReducers<ArticleDetailsPageSchema>({
	recommendations: articleDetailsRecommendationsReducer,
	comments: articleDetailsCommentsReducer,
})
