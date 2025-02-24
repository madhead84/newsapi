import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('Some title', () => {
    render(<App/>);
    const linkElement = screen.getByText(/some title/i);
    expect(linkElement).toBeInTheDocument();
});
