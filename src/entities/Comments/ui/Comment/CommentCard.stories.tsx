import type {Meta, StoryObj} from '@storybook/react'
import {ThemeDecorator} from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import {Theme} from 'app/providers/ThemeProvider'
import {CommentCard} from './CommentCard'

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta: Meta<typeof CommentCard> = {
	title: 'shared/CommentCard',
	component: CommentCard,
	// This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
	tags: ['autodocs'],
	// More on argTypes: https://storybook.js.org/docs/react/api/argtypes
	argTypes: {}
}

export default meta

type Story = StoryObj<typeof CommentCard>

export const Primary: Story = {
	args: {
		comment: {
			id: 1,
			text: 'hello world',
			user: { id: '1', username: 'Vasya' },
		},
		isLoading: true
	}
}
