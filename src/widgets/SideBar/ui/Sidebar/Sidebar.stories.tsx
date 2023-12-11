import type {Meta, StoryObj} from '@storybook/react'
import {Sidebar} from './Sidebar'
import {ThemeDecorator} from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import {Theme} from 'app/providers/ThemeProvider'
import * as ThemeSwitcher from 'widgets/ThemeSwitcher/ui/ThemeSwticher.stories'
import {StoreDecorator} from 'shared/config/storybook/StoreDecorator/StoreDecorator'

const meta: Meta<typeof Sidebar> = {
	title: 'widget/Sidebar',
	component: Sidebar,
	tags: ['autodocs'],
	argTypes: {}
}

export default meta

type Story = StoryObj<typeof Sidebar>

export const Light: Story = {
	args: {},
	decorators: [
		StoreDecorator({
			user: {
				authData: {}
			}
		})
	]
}

export const Dark: Story = {
	args: {
		...ThemeSwitcher.Dark.args
	},
	decorators: [
		ThemeDecorator(Theme.DARK),
		StoreDecorator({
			user: {
				authData: {}
			}
		})
	]
}

export const NotAuth: Story = {
	args: {},
	decorators: [
		StoreDecorator({
			user: {}
		})
	]
}
