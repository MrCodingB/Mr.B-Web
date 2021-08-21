import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './app';

test('renders home page links', () => {
  render(<App />);
  expect(screen.getAllByText(/about me/i)[0]).toBeInTheDocument();
  expect(screen.getAllByText(/coding/i)[0]).toBeInTheDocument();
  expect(screen.getAllByText(/other/i)[0]).toBeInTheDocument();
  expect(screen.getAllByText(/contact/i)[0]).toBeInTheDocument();
});
