import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Button, ThemeButton } from './Button';

describe('Button', () => {
    test('renders without crashing', () => {
        const { getByText } = render(<Button>Click me</Button>);
        expect(getByText('Click me')).toBeInTheDocument();
    });
    
    test('applies the correct theme class', () => {
        const { container } = render(<Button theme={ThemeButton.CLEAR}>Clear</Button>);
        expect(container.firstChild).toHaveClass('clear');
    });
    
    test('calls the onClick handler when clicked', () => {
        const handleClick = jest.fn();
        const { getByText } = render(<Button onClick={handleClick}>Click me</Button>);
        fireEvent.click(getByText('Click me'));
        expect(handleClick).toHaveBeenCalledTimes(1);
    });
    
    test('disables the button when disabled prop is true', () => {
        const { getByText } = render(<Button disabled>Click me</Button>);
        expect(getByText('Click me')).toBeDisabled();
    });
    
    test('applies the className prop', () => {
        const { container } = render(<Button className="custom-class">Click me</Button>);
        expect(container.firstChild).toHaveClass('custom-class');
    });
});