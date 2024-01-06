import type {Meta, StoryObj} from '@storybook/react'
import {ThemeDecorator} from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import {Theme} from 'app/providers/ThemeProvider'
import AddCommentForm from './AddCommentForm'
import {action} from '@storybook/addon-actions'
import {StoreDecorator} from 'shared/config/storybook/StoreDecorator/StoreDecorator'

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta: Meta<typeof AddCommentForm> = {
	title: 'shared/AddCommentForm',
	component: AddCommentForm,
	// This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
	// More on argTypes: https://storybook.js.org/docs/react/api/argtypes
	argTypes: {}
}

export default meta

type Story = StoryObj<typeof AddCommentForm>

export const Primary: Story = {
	args: {
		onSendComment: action('onSendComment')
	},
	decorators: [ThemeDecorator(Theme.GREEN), StoreDecorator({})]
}
