import { DeepPartial } from '@reduxjs/toolkit'
import { StateSchema } from 'app/providers/StoreProvider'
import { getCounter } from './getCounter'

describe('getCounter', () => {
	test('should return the counter value from the state', () => {
		const state: DeepPartial<StateSchema> = { counter: { value: 42 } }
		const counter = getCounter(state as StateSchema)
		expect(counter.value).toEqual(42)
	})
})
