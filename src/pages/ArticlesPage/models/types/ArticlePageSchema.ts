import {Article, ArticleViewType} from 'entities/Article'
import {EntityState} from '@reduxjs/toolkit'
import {ArticleSortField, ArticleType} from 'entities/Article'
import {SortOrder} from 'shared/types'


export interface ArticlePageSchema extends EntityState<Article> {
	loading?: boolean
	error?: string | null
	view: ArticleViewType
	//pagination
	page: number
	limit: number
	hasMore: boolean

	//sort
	order: SortOrder
	sort: ArticleSortField
	search: string
	type: ArticleType
	
	_inited: boolean
}