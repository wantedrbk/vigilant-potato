import type {Meta, StoryObj} from '@storybook/react'
import {CountrySelect} from './CountrySelect'
import {ThemeDecorator} from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import {Theme} from 'app/providers/ThemeProvider'
const meta: Meta<typeof CountrySelect> = {
	title: 'entities/CountrySelect',
	component: CountrySelect,
	tags: ['autodocs'],
	argTypes: {}
}

export default meta

type Story = StoryObj<typeof CountrySelect>

export const Primary: Story = {
	args: {}
}

export const PrimaryDark: Story = {
	decorators: [ThemeDecorator(Theme.DARK)]
}
