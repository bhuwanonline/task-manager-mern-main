import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the "Hello World" message', () => {
  render(<App/>);
  const helloWorldText = screen.getByText('Hello World');
  expect(helloWorldText).toBeInTheDocument();
});