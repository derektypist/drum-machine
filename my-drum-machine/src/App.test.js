import React from 'react';
import { render } from '@testing-library/react';
import DrumMachine from './App';

test('renders learn react link', () => {
  const { getByText } = render(<DrumMachine />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
