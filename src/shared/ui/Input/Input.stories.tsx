import type {Meta, StoryObj} from '@storybook/react'

import {Input} from './Input'

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta: Meta<typeof Input> = {
	title: 'shared/Input',
	component: Input,
	// This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
	tags: ['autodocs'],
	// More on argTypes: https://storybook.js.org/docs/react/api/argtypes
	argTypes: {}
}

export default meta

type Story = StoryObj<typeof Input>

export const Primary: Story = {
	args: {
		placeholder: 'Text',
		value: '123'
	}
}
