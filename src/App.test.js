import { render, screen } from '@testing-library/react';
import App from './App';

test('Tabs demo app works', () => {
  render(<App />);
  const linkElement = screen.getByText('Tabs demo');
  expect(linkElement).toBeInTheDocument();
});
