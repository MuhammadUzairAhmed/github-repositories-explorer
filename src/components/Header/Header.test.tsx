import { render, screen } from '@testing-library/react';
import { test, expect } from 'vitest';
import Header from './Header';

test('renders header with navigation links', () => {
  render(<Header />);

  const titleElement = screen.getByText('Github Repositories Explorer');
  expect(titleElement).toBeTruthy();

  const servicesLink = screen.getByText('Services');
  expect(servicesLink).toBeTruthy();

  const accountLink = screen.getByText('Account');
  expect(accountLink).toBeTruthy();
});
