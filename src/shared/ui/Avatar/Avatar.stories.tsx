import type {Meta, StoryObj} from '@storybook/react'
import {Avatar} from 'shared/ui/Avatar/Avatar'
import AvatarImg from '../../assets/icons/avatar.png'
const meta: Meta<typeof Avatar> = {
	title: 'shared/Avatar',
	component: Avatar,
	tags: ['autodocs'],
	argTypes: {}
}

export default meta

type Story = StoryObj<typeof Avatar>

export const Primary: Story = {
	args: {
		src: AvatarImg,
		size: 150
	}
}

export const Small: Story = {
	args: {
		src: AvatarImg,
		size: 50
	}
}

export const PrimaryError: Story = {
	args: {
		src: '',
		size: 150,
		alt: 'Not Found'
	}
}
