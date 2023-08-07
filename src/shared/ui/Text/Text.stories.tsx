import type {Meta, StoryObj} from '@storybook/react'
import {Text, TextTheme} from './Text'
import {ThemeDecorator} from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import {Theme} from 'app/providers/ThemeProvider'

const meta: Meta<typeof Text> = {
	title: 'shared/Text',
	component: Text,
	tags: ['autodocs'],
	argTypes: {}
}

export default meta

type Story = StoryObj<typeof Text>

export const Primary: Story = {
	args: {
		title: 'Title example',
		text: 'Text example'
	}
}

export const PrimaryDark: Story = {
	args: {
		title: 'Title example',
		text: 'Text example'
	},
	decorators: [ThemeDecorator(Theme.DARK)]
}

export const Error: Story = {
	args: {
		title: 'Title example',
		text: 'Text example',
		theme: TextTheme.ERROR
	}
}

export const ErrorDark: Story = {
	args: {
		title: 'Title example',
		text: 'Text example',
		theme: TextTheme.ERROR
	},
	decorators: [ThemeDecorator(Theme.DARK)]
}

export const OnlyTitle: Story = {
	args: {
		title: 'Title example'
	}
}

export const OnlyText: Story = {
	args: {
		text: 'Text example'
	}
}
