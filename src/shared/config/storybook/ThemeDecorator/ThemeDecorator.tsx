import React from "react";
import {Decorator, Story, StoryObj} from "@storybook/react";
import {Theme} from "app/providers/ThemeProvider";


// eslint-disable-next-line react/display-name
export const ThemeDecorator = (theme: Theme) => (StoryComponent: Story) => (
    <div className={`app ${theme}`}>
        <StoryComponent />
    </div>
);

