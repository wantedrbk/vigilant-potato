import {CounterScheme} from 'entities/Counter'
import {UserSchema} from 'entities/User'
import {LoginSchema} from 'features/AuthByUsername'
import {AnyAction, EnhancedStore, Reducer, ReducersMapObject} from '@reduxjs/toolkit'
import {CombinedState} from 'redux'
import {ProfileSchema} from 'entities/Profile'
import {AxiosInstance} from 'axios'
import {ArticleSchema} from 'entities/Article'
import {AddCommentSchema} from 'features/addNewComment'
import {ArticlePageSchema} from 'pages/ArticlesPage'
import {scrollControllerSchema} from 'features/scrollController'
import {ArticleDetailsPageSchema} from 'pages/ArticleDetailsPage'

export interface StateSchema {
	counter: CounterScheme
	user: UserSchema
	scrollController: scrollControllerSchema
	// Async reducers
	loginForm?: LoginSchema
	profile?: ProfileSchema
	articleDetails?: ArticleSchema
	addCommentForm?: AddCommentSchema
	articlePage?: ArticlePageSchema
	articleDetailsPage?: ArticleDetailsPageSchema
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
