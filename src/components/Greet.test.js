import React from 'react';
import { render } from '@testing-library/react';
import { Greet } from './Greet';


describe('Greet component', () => {
    it('renders with first and last name', () => {
        const { getByText } = render(<Greet firstName="John" lastName="Doe" />);
        expect(getByText('hello John, and lastname is Doe')).toBeInTheDocument();
    });

    it('renders with only first name', () => {
        const { getByText } = render(<Greet firstName="John" />);
        expect(getByText('hello John, and lastname is undefined')).toBeInTheDocument();
    });

    it('renders with only last name', () => {
        const { getByText } = render(<Greet lastName="Doe" />);
        expect(getByText('hello undefined, and lastname is Doe')).toBeInTheDocument();
    });

    it('renders with no name', () => {
        const { getByText } = render(<Greet />);
        expect(getByText('hello undefined, and lastname is undefined')).toBeInTheDocument();
    });
});

