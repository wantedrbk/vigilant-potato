import { DeepPartial } from '@reduxjs/toolkit'
import { createReduxStore } from 'app/providers/StoreProvider/config/store'
import { ReactNode } from 'react'
import { Provider } from 'react-redux'
import { StateSchema } from '../config/StateSchema'

interface StoreProviderProps {
	children?: ReactNode
	initialState?: DeepPartial<StateSchema>
}

export const StoreProvider = (props: StoreProviderProps) => {
	const { children, initialState } = props

	const store = createReduxStore(initialState as StateSchema)

	return <Provider store={store}>{children}</Provider>
}
