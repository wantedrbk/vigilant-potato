import type {Meta, StoryObj} from '@storybook/react'
import {ThemeDecorator} from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import {Theme} from 'app/providers/ThemeProvider'
import {Skeleton} from './Skeleton'

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta: Meta<typeof Skeleton> = {
	title: 'shared/Skeleton',
	component: Skeleton,
	// This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
	tags: ['autodocs'],
	// More on argTypes: https://storybook.js.org/docs/react/api/argtypes
	argTypes: {}
}

export default meta

type Story = StoryObj<typeof Skeleton>

export const Primary: Story = {
	args: {
		height: 100,
		width: '100%'
	},
	decorators: [ThemeDecorator(Theme.GREEN)]
}

export const PrimaryRound: Story = {
	args: {
		width: 100,
		height: 100,
		border: '50%'
	},
	decorators: [ThemeDecorator(Theme.GREEN)]
}
