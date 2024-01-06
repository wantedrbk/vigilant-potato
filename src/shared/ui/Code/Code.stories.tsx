import type {Meta, StoryObj} from '@storybook/react'
import {Code} from './Code'
import {ThemeDecorator} from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import {Theme} from 'app/providers/ThemeProvider'

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta: Meta<typeof Code> = {
	title: 'shared/Code',
	component: Code,
	// This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
	tags: ['autodocs'],
	// More on argTypes: https://storybook.js.org/docs/react/api/argtypes
	argTypes: {}
}

export default meta

type Story = StoryObj<typeof Code>

export const Primary: Story = {
	args: {
		text:
			"import {classNames} from 'shared/lib/classNames/classNames'\n" +
			"import cls from './Icon.module.scss'\n" +
			"import React from 'react'\n" +
			"import type {Meta, StoryObj} from '@storybook/react'\n" +
			"import {Code} from './Code'\n" +
			'\n' +
			// eslint-disable-next-line max-len
			'// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export\n' +
			'const meta: Meta<typeof Code> = {\n' +
			"\ttitle: 'shared/Code',\n" +
			'\tcomponent: Code,\n' +
			// eslint-disable-next-line max-len
			'\t// This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs\n' +
			"\ttags: ['autodocs'],\n" +
			'\t// More on argTypes: https://storybook.js.org/docs/react/api/argtypes\n' +
			'\targTypes: {}\n' +
			'}\n'
	},
	decorators: [ThemeDecorator(Theme.GREEN)]
}
export const Primary2: Story = {
	args: {}
}
