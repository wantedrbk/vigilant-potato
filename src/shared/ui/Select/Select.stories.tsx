import type {Meta, StoryObj} from '@storybook/react'
import {Select} from 'shared/ui/Select/Select'
import {ThemeDecorator} from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import {Theme} from 'app/providers/ThemeProvider'
const meta: Meta<typeof Select> = {
	title: 'shared/Select',
	component: Select,
	tags: ['autodocs'],
	argTypes: {}
}

export default meta

type Story = StoryObj<typeof Select>

export const Primary: Story = {
	args: {
		label: 'Your currency',
		options: [
			{value: 'USD', content: 'USD'},
			{value: 'EUR', content: 'EUR'}
		]
	}
}

export const PrimaryDark: Story = {
	args: {
		label: 'Your currency',
		options: [
			{value: 'USD', content: 'USD'},
			{value: 'EUR', content: 'EUR'}
		]
	},
	decorators: [ThemeDecorator(Theme.DARK)]
}
