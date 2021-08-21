import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './app';

test('renders home page links', () => {
  render(<App />);
  expect(screen.getByText(/about/i)).toBeInTheDocument();
  expect(screen.getByText(/code/i)).toBeInTheDocument();
  expect(screen.getByText(/other/i)).toBeInTheDocument();
  expect(screen.getByText(/contact/i)).toBeInTheDocument();
});
