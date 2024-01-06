import {CommentCardType} from 'entities/Comments'
import {EntityState} from '@reduxjs/toolkit'


export interface ArticleDetailsCommentsSchema extends EntityState<CommentCardType> {
	loading?: boolean
	error?: string | null
}
