import { fireEvent, screen } from '@testing-library/react'
import { componentRender } from 'shared/lib/tests/componentRender/componentRender'
import { Counter } from './Counter'

describe('Counter', () => {
	test('should render the counter value', () => {
		componentRender(<Counter />)
		const valueTitle = screen.getByTestId('value-title')
		expect(valueTitle).toHaveTextContent('value = 0')
	})

	test('should increment the counter value when the increment button is clicked', () => {
		componentRender(<Counter />, {
			initialState: { counter: { value: 10 } },
		})
		const incrementBtn = screen.getByTestId('increment-btn')
		fireEvent.click(incrementBtn)
		const valueTitle = screen.getByTestId('value-title')
		expect(valueTitle).toHaveTextContent('value = 10')
	})

	test('should decrement the counter value when the decrement button is clicked', () => {
		componentRender(<Counter />, {
			initialState: { counter: { value: 10 } },
		})
		const decrementBtn = screen.getByTestId('decrement-btn')
		fireEvent.click(decrementBtn)
		const valueTitle = screen.getByTestId('value-title')
		expect(valueTitle).toHaveTextContent('value = 9')
	})
})
