import { CounterScheme } from '../types/counterScheme'
import { counterActions, counterReducer } from './counterSlice'

describe('counterSlice', () => {
	test('should handle increment correctly', () => {
		const initialState: CounterScheme = { value: 0 }
		const action = counterActions.increment()
		const state = counterReducer(initialState, action)
		expect(state.value).toEqual(1)
	}),
		test('should handle decrement correctly', () => {
			const initialState: CounterScheme = { value: 0 }
			const action = counterActions.decrement()
			const state = counterReducer(initialState, action)
			expect(state.value).toEqual(-1)
		}),
		test('should work with empty state', () => {
			const initialState: CounterScheme = undefined
			const action = counterActions.increment()
			const state = counterReducer(initialState, action)
			expect(state.value).toEqual(1)
		})
})
