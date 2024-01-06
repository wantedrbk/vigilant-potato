import type {Meta, StoryObj} from '@storybook/react'
import {ThemeDecorator} from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import {Theme} from 'app/providers/ThemeProvider'
import {CommentList} from './CommentList'

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta: Meta<typeof CommentList> = {
	title: 'shared/CommentList',
	component: CommentList,
	// This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
	tags: ['autodocs'],
	// More on argTypes: https://storybook.js.org/docs/react/api/argtypes
	argTypes: {}
}

export default meta

type Story = StoryObj<typeof CommentList>

export const Primary: Story = {
	args: {
		comments: [
			{
				id: 1,
				text: 'hello world',
				user: { id: '1', username: 'Vasya' },
			},
			{
				id: 1,
				text: 'Comment 2',
				user: { id: '1', username: 'Petya' },
			},
		],
	}
}

export const Loading: Story = {
	args: {
		comments: [],
		isLoading: true,
	},
	decorators: [ThemeDecorator(Theme.GREEN)]
}
