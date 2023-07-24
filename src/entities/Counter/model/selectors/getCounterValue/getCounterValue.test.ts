import { StateSchema } from 'app/providers/StoreProvider'
import { DeepPartial } from 'redux'
import { getCounterValue } from './getCounterValue'

describe('getCounterValue', () => {
	it('should return the counter value from the state', () => {
		const state: DeepPartial<StateSchema> = { counter: { value: 42 } }
		const counterValue = getCounterValue(state as StateSchema)
		expect(counterValue).toEqual(42)
	})

	// it('should return the default counter value if the counter is undefined', () => {
	// 	const state: DeepPartial<StateSchema> = {}
	// 	const counterValue = getCounterValue(state as StateSchema)
	// 	expect(counterValue).toEqual(0)
	// })
})
