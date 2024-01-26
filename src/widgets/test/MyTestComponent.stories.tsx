import type {Meta, StoryObj} from '@storybook/react'
import {ThemeDecorator} from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import {Theme} from 'app/providers/ThemeProvider'
import {MyTestComponent} from './MyTestComponent'

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta: Meta<typeof MyTestComponent> = {
	title: '{type-of-component}/MyTestComponent',
	component: MyTestComponent,
	// This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
	tags: ['autodocs'],
	// More on argTypes: https://storybook.js.org/docs/react/api/argtypes
	argTypes: {}
}

export default meta

type Story = StoryObj<typeof MyTestComponent>

export const Primary: Story = {
	args: {}
}