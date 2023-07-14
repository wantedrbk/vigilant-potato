import React from 'react';
import {fireEvent, screen} from '@testing-library/react';
import {Sidebar} from "./Sidebar";
import {componentRender} from "shared/lib/tests/componentRender/componentRender";

describe('Sidebar', () => {
    test('renders without crashing', () => {
        componentRender(<Sidebar/>);
        expect(screen.getByTestId('sidebar')).toBeInTheDocument();
    })
    test('toggle test', () => {
        componentRender(<Sidebar/>);
        const toggleButton = screen.getByTestId('sidebar-toggle');
        expect(screen.getByTestId('sidebar')).toBeInTheDocument();
        fireEvent.click(toggleButton);
        expect(screen.getByTestId('sidebar')).toHaveClass('collapsed');
    })
})