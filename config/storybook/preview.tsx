import React from "react";
import type { Preview } from "@storybook/react";
import '../../src/app/styles/index.scss'
import {Theme} from "../../src/app/providers/ThemeProvider";
import {classNames} from "../../src/shared/lib/classNames/classNames";
import {RouterDecorator} from "../../src/shared/config/storybook/RouterDecorator/RouterDecorator";


const preview: Preview = {
    
    parameters: {
        actions: { argTypesRegex: "^on[A-Z].*" },
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/,
            },
        },
    },
    decorators: [
        (Story) => {
            return (
                <div className={classNames('app', {} , [Theme.LIGHT])}>
                    {/* 👇 Decorators in Storybook also accept a function. Replace <Story/> with Story() to enable it  */}
                    {Story()}
                </div>
            )
        },
        RouterDecorator
    ]
};

export default preview;

