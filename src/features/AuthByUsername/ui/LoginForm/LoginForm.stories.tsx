import type {Meta, StoryObj} from '@storybook/react'
import LoginForm from './LoginForm'
import {StoreDecorator} from 'shared/config/storybook/StoreDecorator/StoreDecorator'
import {ThemeDecorator} from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import {Theme} from 'app/providers/ThemeProvider'

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta: Meta<typeof LoginForm> = {
	title: 'features/LoginForm',
	component: LoginForm,
	// This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
	tags: ['autodocs'],
	// More on argTypes: https://storybook.js.org/docs/react/api/argtypes
	argTypes: {}
}

export default meta

type Story = StoryObj<typeof LoginForm>

export const Primary: Story = {
	args: {}
}
Primary.decorators = [
	StoreDecorator({
		loginForm: {
			username: 'admin',
			password: '123456'
		}
	})
]

export const PrimaryDark: Story = {
	args: {}
}
PrimaryDark.decorators = [
	ThemeDecorator(Theme.DARK),
	StoreDecorator({
		loginForm: {
			username: 'admin',
			password: '123456'
		}
	})
]

export const WithError: Story = {
	args: {}
}
WithError.decorators = [
	StoreDecorator({
		loginForm: {
			username: 'admin',
			password: '123456',
			error: 'ERROR'
		}
	})
]

export const Loading: Story = {
	args: {}
}
Loading.decorators = [
	StoreDecorator({
		loginForm: {
			loading: 'pending'
		}
	})
]
