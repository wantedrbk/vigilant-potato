import type {Meta, StoryObj} from '@storybook/react'
import {ThemeDecorator} from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import {Theme} from 'app/providers/ThemeProvider'
import {ArticleViewSelector} from './ArticleViewSelector'

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta: Meta<typeof ArticleViewSelector> = {
	title: 'shared/ArticleViewSelector',
	component: ArticleViewSelector,
	// This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
	tags: ['autodocs'],
	// More on argTypes: https://storybook.js.org/docs/react/api/argtypes
	argTypes: {}
}

export default meta

type Story = StoryObj<typeof ArticleViewSelector>

export const Primary: Story = {
	args: {}
}