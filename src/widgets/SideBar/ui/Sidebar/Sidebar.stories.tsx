import type { Meta, StoryObj } from '@storybook/react';
import { Sidebar } from './Sidebar';
import {ThemeDecorator} from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import {Theme} from "app/providers/ThemeProvider";
// import {ThemeSwitcher} from "widgets/ThemeSwitcher";
import * as ThemeSwitcher from "widgets/ThemeSwitcher/ui/ThemeSwticher.stories";
// import {ThemeSwitcher} from "widgets/ThemeSwitcher";


const meta: Meta<typeof Sidebar> = {
    title: 'widget/Sidebar',
    component: Sidebar,
    tags: ['autodocs'],
    argTypes: {},
};

export default meta;

type Story = StoryObj<typeof Sidebar>;

export const Light: Story = {
    args: {

    },
};

export const Dark: Story = {
    args: {
        ...ThemeSwitcher.Dark.args
    },
    decorators: [
        ThemeDecorator(Theme.DARK)
    ]
};
