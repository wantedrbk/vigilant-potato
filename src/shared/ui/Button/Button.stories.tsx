import type { Meta, StoryObj} from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';

import {Button, ThemeButton} from './Button';
import {Theme} from "app/providers/ThemeProvider";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta: Meta<typeof Button> = {
    title: 'shared/Button',
    component: Button,
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
    tags: ['autodocs'],
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {
    
    },
};

export default meta;


type Story = StoryObj<typeof Button>;

export const Primary: Story = {
    args: {
        children: 'Text'
    },
};

export const Clear: Story = {
    args: {
        children: 'Text',
        theme: ThemeButton.CLEAR
    },
};

export const OutlineLight: Story = {
    args: {
        children: 'Text',
        theme: ThemeButton.OUTLINE
    },
};


export const OutlineDark: Story = {
    args: {
        children: 'Text',
        theme: ThemeButton.OUTLINE
    },
};

OutlineDark.decorators = [ThemeDecorator(Theme.DARK)]
