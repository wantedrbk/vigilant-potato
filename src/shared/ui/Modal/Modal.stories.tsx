import type {Meta, StoryObj} from '@storybook/react'
import {Modal} from './Modal'

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta: Meta<typeof Modal> = {
	title: 'shared/Modal',
	component: Modal,
	// This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
	tags: ['autodocs'],
	// More on argTypes: https://storybook.js.org/docs/react/api/argtypes
	argTypes: {}
}

export default meta

type Story = StoryObj<typeof Modal>

export const Primary: Story = {
	args: {
		isOpen: true,
		children:
			'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa cum ipsa molestias\n' +
			'necessitatibus repellat totam.'
	}
}
