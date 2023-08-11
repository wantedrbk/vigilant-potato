import type {Meta, StoryObj} from '@storybook/react'
import {NavBar} from './NavBar'
import {ThemeDecorator} from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import {Theme} from 'app/providers/ThemeProvider'
import {StoreDecorator} from 'shared/config/storybook/StoreDecorator/StoreDecorator'

const meta: Meta<typeof NavBar> = {
	title: 'widget/Navbar',
	component: NavBar,
	tags: ['autodocs'],
	argTypes: {}
}

export default meta

type Story = StoryObj<typeof NavBar>

export const Light1: Story = {
	args: {},
	decorators: [StoreDecorator({})]
}

export const Dark1: Story = {
	args: {},
	decorators: [ThemeDecorator(Theme.DARK), StoreDecorator({})]
}

export const AuthNavbar: Story = {
	args: {},
	decorators: [
		ThemeDecorator(Theme.DARK),
		StoreDecorator({
			user: {
				authData: {id: '1', username: 'admin'}
			}
		})
	]
}
