import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './app';

test('renders home page links', () => {
  render(<App />);
  expect(screen.getAllByText(/about me/i)).toBeInTheDocument();
  expect(screen.getAllByText(/coding/i)).toBeInTheDocument();
  expect(screen.getAllByText(/other/i)).toBeInTheDocument();
  expect(screen.getAllByText(/contact/i)).toBeInTheDocument();
});
