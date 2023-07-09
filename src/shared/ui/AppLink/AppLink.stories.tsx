import type {Meta, StoryObj} from '@storybook/react';
import {AppLink, AppLinkTheme} from './AppLink';
import {ThemeDecorator} from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import {Theme} from "app/providers/ThemeProvider";


const meta: Meta<typeof AppLink> = {
    title: 'shared/AppLink',
    component: AppLink,
    tags: ['autodocs'],
    argTypes: {},
    args: {
        to: '/',
    }
};

export default meta;

type Story = StoryObj<typeof AppLink>;

export const Primary: Story = {
    args: {
        children: 'text',
        theme: AppLinkTheme.PRIMARY
    },
};

export const Secondary: Story = {
    args: {
        children: 'text',
        theme: AppLinkTheme.SECONDARY
    },
    decorators: [
    ]
};

export const Red: Story = {
    args: {
        children: 'text',
        theme: AppLinkTheme.RED
    },
    decorators: [
    ]
};

export const PrimaryDark: Story = {
    args: {
        children: 'text',
        theme: AppLinkTheme.PRIMARY
    },
    decorators: [
        ThemeDecorator(Theme.DARK)
    ]
};

export const SecondaryDark: Story = {
    args: {
        children: 'text',
        theme: AppLinkTheme.SECONDARY
    },
    decorators: [
        ThemeDecorator(Theme.DARK)
    ]
};

export const RedDark: Story = {
    args: {
        children: 'text',
        theme: AppLinkTheme.RED
    },
    decorators: [
        ThemeDecorator(Theme.DARK)
    ]
};
