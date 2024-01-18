import type {Meta, StoryObj} from '@storybook/react'
import {ThemeDecorator} from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import {Theme} from 'app/providers/ThemeProvider'
import {ArticleTypeSelector} from './ArticleTypeSelector'

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta: Meta<typeof ArticleTypeSelector> = {
	title: 'shared/ArticleTypeSelector',
	component: ArticleTypeSelector,
	// This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
	tags: ['autodocs'],
	// More on argTypes: https://storybook.js.org/docs/react/api/argtypes
	argTypes: {}
}

export default meta

type Story = StoryObj<typeof ArticleTypeSelector>

export const Primary: Story = {
	args: {}
}