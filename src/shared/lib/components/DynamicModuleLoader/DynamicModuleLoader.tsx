import {FC, useEffect} from 'react'
import {useStore} from 'react-redux'
import {ReduxStoreWithManager, StateSchemaKey} from 'app/providers/StoreProvider/config/StateSchema'
import {Reducer} from '@reduxjs/toolkit'
import {useAppDispatch} from 'shared/lib/hooks/useAppDispatch'

export type ReducersList = {
	[name in StateSchemaKey]?: Reducer
}

// type ReducerListEntry = [StateSchemaKey, Reducer]

interface DynamicModuleLoaderProps {
	reducers: ReducersList
	removeAfterUnmount?: boolean
}

export const DynamicModuleLoader: FC<DynamicModuleLoaderProps> = (props) => {
	const {children, reducers, removeAfterUnmount} = props
	const store = useStore() as ReduxStoreWithManager
	const dispatch = useAppDispatch()

	useEffect(() => {
		Object.entries(reducers).forEach(([name, reducer]) => {
			const existedReducers = store.reducerManager.getReducerMap()
			if (existedReducers[name as StateSchemaKey]) {
				return // skip if already loaded
			}
			store.reducerManager.add(name as StateSchemaKey, reducer)
			dispatch({type: `@INIT ${name} reducer`})
		})

		return () => {
			if (removeAfterUnmount) {
				Object.entries(reducers).forEach(
					// eslint-disable-next-line @typescript-eslint/no-unused-vars
					([name, reducer]) => {
						store.reducerManager.remove(name as StateSchemaKey)
						dispatch({type: `@DESTROY ${name} reducer`})
					}
				)
			}
		}
		// eslint-disable-next-line
	}, [])

	return <>{children}</>
}
