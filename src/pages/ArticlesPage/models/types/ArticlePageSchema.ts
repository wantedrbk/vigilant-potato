import {Article, ArticleViewType} from 'entities/Article'
import {EntityState} from '@reduxjs/toolkit'


export interface ArticlePageSchema extends EntityState<Article> {
	loading?: boolean
	error?: string | null
	view: ArticleViewType
}