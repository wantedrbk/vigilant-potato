import type {Meta, StoryObj} from '@storybook/react'
import {CurrencySelect} from './CurrencySelect'
import {ThemeDecorator} from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import {Theme} from 'app/providers/ThemeProvider'
const meta: Meta<typeof CurrencySelect> = {
	title: 'entities/CurrencySelect',
	component: CurrencySelect,
	tags: ['autodocs'],
	argTypes: {}
}

export default meta

type Story = StoryObj<typeof CurrencySelect>

export const Primary: Story = {
	args: {}
}

export const PrimaryDark: Story = {
	decorators: [ThemeDecorator(Theme.DARK)]
}
