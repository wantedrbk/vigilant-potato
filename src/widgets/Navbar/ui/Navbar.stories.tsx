import type {Meta, StoryObj} from '@storybook/react';
import {NavBar} from './NavBar';
import {ThemeDecorator} from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import {Theme} from "app/providers/ThemeProvider";


const meta: Meta<typeof NavBar> = {
    title: 'widget/Navbar',
    component: NavBar,
    tags: ['autodocs'],
    argTypes: {},
};

export default meta;

type Story = StoryObj<typeof NavBar>;

export const Light1: Story = {
    args: {
  
    },
};

export const Dark1: Story = {
    args: {
  
    },
    decorators: [
        ThemeDecorator(Theme.DARK)
    ]
};

