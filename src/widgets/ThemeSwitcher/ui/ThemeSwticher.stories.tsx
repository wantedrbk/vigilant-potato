import type { Meta, StoryObj } from '@storybook/react';
import { ThemeSwitcher } from './ThemeSwitcher';
import {ThemeDecorator} from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import {Theme} from "app/providers/ThemeProvider";
import DarkIcon from "shared/assets/icons/switcher-dark.svg";
import LightIcon from "shared/assets/icons/switcher-light.svg";
import React from "react";



const meta: Meta<typeof ThemeSwitcher> = {
    title: 'widget/ThemeSwitcher',
    component: ThemeSwitcher,
    tags: ['autodocs'],
    argTypes: {
 
    },
};

export default meta;

type Story = StoryObj<typeof ThemeSwitcher>;

export const Light: Story = {
    render: () => <LightIcon/>,
    args: {
    
    },
};

export const Dark: Story = {
    render: () => <DarkIcon />,
    args: {
    },
    decorators: [
        ThemeDecorator(Theme.DARK)
    ]
};
