import React from 'react'
import {Story} from '@storybook/react'
import {StateSchema, StoreProvider} from 'app/providers/StoreProvider'
import {profileReducer} from 'entities/Profile'
import {loginReducer} from 'features/AuthByUsername/model/slice/loginSlice'
import {ReducersList} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import {addCommentFormReducer} from 'features/addNewComment/model/slice/addCommentFormSlice'
import {articleDetailsReducer} from 'entities/Article/model/slice/articleDetailsSlice'
import {articleDetailsCommentsReducer} from 'pages/ArticleDetailsPage/models/slices/articleDetailsCommentsSlice'

const defaultAsyncReducers: ReducersList = {
	loginForm: loginReducer,
	profile: profileReducer,
	articleDetails: articleDetailsReducer,
	addCommentForm: addCommentFormReducer,
	articleDetailsComments: articleDetailsCommentsReducer
}
// eslint-disable-next-line react/display-name
export const StoreDecorator =
	(state: DeepPartial<StateSchema>, asyncReducers?: ReducersList) => (StoryComponent: Story) => (
		<StoreProvider
			initialState={state}
			asyncReducers={{...defaultAsyncReducers, ...asyncReducers}}
		>
			<StoryComponent />
		</StoreProvider>
	)
