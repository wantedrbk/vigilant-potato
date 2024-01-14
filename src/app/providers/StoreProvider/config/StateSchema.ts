import {CounterScheme} from 'entities/Counter'
import {UserSchema} from 'entities/User'
import {LoginSchema} from 'features/AuthByUsername'
import {AnyAction, EnhancedStore, Reducer, ReducersMapObject} from '@reduxjs/toolkit'
import {CombinedState} from 'redux'
import {ProfileSchema} from 'entities/Profile'
import {AxiosInstance} from 'axios'
import {ArticleSchema} from 'entities/Article'
import {ArticleDetailsCommentsSchema} from 'pages/ArticleDetailsPage/models/types/ArticleDetailsCommentsSchema'
import {AddCommentSchema} from 'features/addNewComment'
import {ArticlePageSchema} from 'pages/ArticlesPage/models/types/ArticlePageSchema'

export interface StateSchema {
	counter: CounterScheme
	user: UserSchema
	// Async reducers
	loginForm?: LoginSchema
	profile?: ProfileSchema
	articleDetails?: ArticleSchema
	articleDetailsComments?: ArticleDetailsCommentsSchema
	addCommentForm?: AddCommentSchema
	articlePage?: ArticlePageSchema
}

export type StateSchemaKey = keyof StateSchema


export interface ReducerManager {
	getReducerMap: () => ReducersMapObject<StateSchema>
	reduce: (state: StateSchema, action: AnyAction) => CombinedState<StateSchema>
	add: (key: StateSchemaKey, reducer: Reducer) => void
	remove: (key: StateSchemaKey) => void
	//
}

export interface ReduxStoreWithManager extends EnhancedStore<StateSchema> {
	reducerManager: ReducerManager
}

export interface ThunkExtraArg {
	api: AxiosInstance
}

export interface ThunkConfig<T> {
	rejectValue: T
	extra: ThunkExtraArg
	state: StateSchema
}
